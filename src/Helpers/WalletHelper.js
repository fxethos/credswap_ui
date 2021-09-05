import * as solanaWeb3 from '@solana/web3.js';
import * as BufferLayout from 'buffer-layout';

class WalletClient {
    
    constructor() {
        this.devUrl = "https://api.devnet.solana.com";
        this.connection = new solanaWeb3.Connection(this.devUrl);
        this.mint = new solanaWeb3.PublicKey('8Jn2Cv3PdYVDyzdQT6GQuMLi5JJWtPvC1iGfXF5RaG4h');
        this.TOKEN_PROGRAM_ID = new solanaWeb3.PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA');
        this.walletConnected = false;
        this.accounts = []
        this.tokenBalance = "";
    }

    #getProvider = () => {
        if ("solana" in window) {
            const provider = window.solana;
            if (provider.isPhantom) {
                return provider;
            }
        }
        alert('Please install Phantom wallet extension in your browser.');
        window.open("https://phantom.app/", "_blank");
    };

    subscribe = async (callback) => {
        const userAddress = await this.getPublicKey();
        const pubKey = new solanaWeb3.PublicKey(userAddress);
        console.log("Subscribing to wallet changes...", pubKey);
        return this.connection.onLogs(this.mint, callback, "confirmed");
    }



    #encodeTokenInstructionData = (instruction) => {
        const LAYOUT = BufferLayout.union(BufferLayout.u8('instruction'));
        LAYOUT.addVariant(
            12,
            BufferLayout.struct([BufferLayout.nu64('amount'), BufferLayout.u8('decimals')]),
            'transferChecked',
        );
        console.log("registry:", ...Object.values(LAYOUT.registry));
        const instructionMaxSpan = Math.max(
            ...Object.values(LAYOUT.registry).map((r) => r.span),
        );
        console.log("instructionMaxSpan:", instructionMaxSpan);
        try {
            let b = Buffer.alloc(instructionMaxSpan);
            let span = LAYOUT.encode(instruction, b);
            console.log("span:", b.slice(0, span));
            return b.slice(0, span);
        } catch(err) {
            console.log(err);
        }
    }

    connect = async () => {
        const provider = this.#getProvider();
        if (provider) {
            if (!provider.isConnected) {
                await provider.connect();
                this.walletConnected = true;
                return provider.isConnected;
            } else {
                return provider.isConnected;
            }
        } else {        
            return false;
        } 
    }

    getPublicKey = async () => {
        const provider = this.#getProvider();
        if (provider) {
            if (!provider.isConnected) {
                provider.connect().then(res => {
                    console.log("connection successful!", res);
                    this.walletConnected = true;
                });
                
            }
            return provider.publicKey;
        } else {        
            return false;
        } 
    }

    getBalance = async () => {
        try {
            const address = await this.getPublicKey();
            const pubKey = new solanaWeb3.PublicKey(address);
            this.accounts = await this.connection.getTokenAccountsByOwner(pubKey, {mint: this.mint});
            const tokenPubKey = this.accounts.value[0].pubkey;
            return await this.connection.getTokenAccountBalance(tokenPubKey, "confirmed");
        } catch(err) {
            console.log(err);
        }
    }

    send = async({amount, toAddress}) => {
        const decimals = 0;
        try {
            console.log(this.accounts.value[0]);
            const ownerAddress = await this.getPublicKey();
            const source = this.accounts.value[0].pubkey;
            const destination = await this.getTokenPubKey(toAddress);
            const owner = new solanaWeb3.PublicKey(ownerAddress);
            const mint = this.mint;
            const keys = [
                {pubkey: source, isSigner: false, isWritable: true},
                {pubkey: mint, isSigner: false, isWritable: false},
                {pubkey: destination, isSigner: false, isWritable: true},
                {pubkey: owner, isSigner: true, isWritable: false}
            ];
            const transactionInstruction = new solanaWeb3.TransactionInstruction({
                data: this.#encodeTokenInstructionData({
                    transferChecked: { amount, decimals },
                }),
                keys,
                programId: this.TOKEN_PROGRAM_ID
            });
            const tx = new solanaWeb3.Transaction();
            console.log("Transaction:", tx);
            tx.feePayer = owner;
            tx.add(transactionInstruction);
            tx.recentBlockhash = (await this.connection.getRecentBlockhash()).blockhash;
            let signed;
            try {
                signed = await window.solana?.signTransaction(tx);
            } catch(err) { 
                console.log("Error signing transaction:", err);
            }
            let signature;
            try {
                signature = await this.connection.sendRawTransaction(signed.serialize());
            } catch(err) {
                console.log("Error sending transaction:", err);
            }
            
            await this.connection.confirmTransaction(signature);
            console.log("Transaction confirmed:", signature);
        } catch(err) {
            console.log(err);
        }
    }

    

    getTokenPubKey = async (address) => {
        const defaultAccountPubkey = new solanaWeb3.PublicKey(address);
        const tokenAccounts = await this.connection.getTokenAccountsByOwner(defaultAccountPubkey, {mint: this.mint});
        return tokenAccounts.value[0].pubkey;
    }

    #onBalanceChange = (logs, ctx) => {
        console.log("Account changed:", logs);
        this.getBalance().then(bal => {
            this.tokenBalance = bal.value.amount;
            console.log("Current Balance:", this.tokenBalance);
        });
    }
    
}

export default new WalletClient();