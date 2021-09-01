import * as solanaWeb3 from '@solana/web3.js';

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

export const getConnection = () => {
    const devUrl = "https://api.devnet.solana.com";
    const connection = new solanaWeb3.Connection(devUrl);
    console.log(connection);
}