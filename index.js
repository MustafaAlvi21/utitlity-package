const axios = require("axios");
const {
    nftforwallet,
    sftforwallet,
    tokensforwallet,
    getwallet,
    getwallets,
    createwallet,
    updatewallet,
    deletewallet,
    signature
} = require("./apis/1_wallets");



class Utility {
    constructor(apikey) {
        this.apikey = apikey;
    }

    init() {
       axios.defaults.headers.common['accept'] = `'application/json'`;
        axios.defaults.headers.common['X-API-Key'] = `${this.apikey}`;
    }

    nftForWallet(...params) {
        nftforwallet(...params)
    }

    sftForWallet(...params) {
        sftforwallet(...params)
    }

    tokensForWallet(...params) {
        tokensforwallet(...params)
    }

    getWallet(...params) {
        getwallet(...params)
    }

    getWallets(...params) {
        getwallets(...params)
    }

    createWallet(...params) {
        createwallet(...params)
    }

    updateWallet(...params) {
        updatewallet(...params)
    }

    deleteWallet(...params) {
        deletewallet(...params)
    }

    getSignature(...params) {
        signature(...params)
    }

}


// const myUtility = new Utility("f253d57f-1740-4603-9697-2dc1399eef73");
// const myUtility = new Utility("588defcd-92ad-4891-93c8-ddd5bf41ea9d");

// myUtility.init();
// myUtility.nftForWallet("0xf7f9e7be5971dd17563dcbaa745975c0fb919669", 1);
// myUtility.sftForWallet("0xf7f9e7be5971dd17563dcbaa745975c0fb919669", 1);
// myUtility.tokensForWallet("0xf7f9e7be5971dd17563dcbaa745975c0fb919669", 1);
// myUtility.getWallet("address");
// myUtility.getWallets(1);
// myUtility.createWallet(1, "test-1");
// myUtility.updateWallet("42e9e745-fb71-4515-8f0a-db43ba8ec7fe", "test-420", true);
// myUtility.deleteWallet("42e9e745-fb71-4515-8f0a-db43ba8ec7fe");
// myUtility.getSignature("0xda8d71c98b395d6ab86959bd64ece07cd2274411", "hello");


module.exports = Utility;