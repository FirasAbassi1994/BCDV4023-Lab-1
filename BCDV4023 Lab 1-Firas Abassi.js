document.addEventListener('DOMContentLoaded', () => {
    // Connect to Ethereum using MetaMask
    async function connectToEthereum() {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            try {
                // Request account access if needed
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                console.log('Connected to MetaMask');
                return true;
            } catch (error) {
                console.error('Error connecting to MetaMask:', error);
                return false;
            }
        } else {
            console.error('MetaMask not detected!');
            return false;
        }
    }

    // Function to interact with Ethereum
    async function interactWithEthereum() {
        const isConnected = await connectToEthereum();

        if (isConnected) {
            // Your Ethereum interaction code goes here
            const accounts = await window.web3.eth.getAccounts();
            console.log('Connected Ethereum Account:', accounts[0]);

            // Example: Get the Ethereum network ID
            const networkId = await window.web3.eth.net.getId();
            console.log('Ethereum Network ID:', networkId);
        }
    }

    // Call the interaction function when the page loads
    interactWithEthereum();
});
