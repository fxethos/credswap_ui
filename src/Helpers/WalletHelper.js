import * as solanaWeb3 from '@solana/web3.js';

class WalletClient {
    
    constructor() {
        this.devUrl = "https://api.devnet.solana.com";
        this.connection = new solanaWeb3.Connection(this.devUrl);
        this.mint = new solanaWeb3.PublicKey('8Jn2Cv3PdYVDyzdQT6GQuMLi5JJWtPvC1iGfXF5RaG4h');
        this.walletConnected = false;
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

    #onBalanceChange = (logs, ctx) => {
        console.log("Account changed:", logs);
        this.getBalance().then(bal => {
            this.tokenBalance = bal.value.amount;
            console.log("Current Balance:", this.tokenBalance);
        });
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
            const accounts = await this.connection.getTokenAccountsByOwner(pubKey, {mint: this.mint});
            const tokenPubKey = accounts.value[0].pubkey;
            return await this.connection.getTokenAccountBalance(tokenPubKey, "confirmed");
        } catch(err) {
            console.log(err);
        }
    }
    
}

export default new WalletClient();