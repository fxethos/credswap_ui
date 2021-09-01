import * as solanaWeb3 from '@solana/web3.js';

class WalletClient {
    devUrl = "https://api.devnet.solana.com";
    connection = new solanaWeb3.Connection(this.devUrl);
    mint = new solanaWeb3.PublicKey('8Jn2Cv3PdYVDyzdQT6GQuMLi5JJWtPvC1iGfXF5RaG4h');

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

    #getPublicKey = async () => {
        const provider = this.#getProvider();
        if (provider) {
            await provider.connect();
            return provider.publicKey;
        } else {
            return false;
        } 
    }

    getBalance = async () => {
        try {
            const address = await this.#getPublicKey();
            const pubKey = new solanaWeb3.PublicKey(address);
            const accounts = await this.connection.getTokenAccountsByOwner(pubKey, {mint: this.mint});
            const tokenPubKey = accounts.value[0].pubkey;
            return await this.connection.getTokenAccountBalance(tokenPubKey, "confirmed");
        } catch(err) {
            console.log(err);
        }
    }
    
}

const getProvider = () => {
    if ("solana" in window) {
        const provider = window.solana;
        if (provider.isPhantom) {
            return provider;
        }
    }
    alert('Please install Phantom wallet extension in your browser.');
    window.open("https://phantom.app/", "_blank");
};

export const connectWallet = async () => {
    const provider = getProvider();
    if (provider) {
        await provider.connect();
        return true;
    } else {
        return false;
    } 
}

export const getBalance = async () => {
    const devUrl = "https://api.devnet.solana.com";
    const connection = new solanaWeb3.Connection(devUrl);
    
}

export default new WalletClient();