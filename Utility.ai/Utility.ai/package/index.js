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
} = require("./wallets");



class Utility {
    constructor(apikey) {
        this.apikey = apikey;
    }

    init() {
       axios.defaults.headers.common['accept'] = `'application/json'`;
        axios.defaults.headers.common['X-API-Key'] = `${this.apikey}`;
    }

    __nftforwallet(...params) {
        nftforwallet(...params)
    }

    __sftforwallet(...params) {
        sftforwallet(...params)
    }

    __tokensforwallet(...params) {
        tokensforwallet(...params)
    }

    __getwallet(...params) {
        getwallet(...params)
    }

    __getwallets(...params) {
        getwallets(...params)
    }

    __createwallet(...params) {
        createwallet(...params)
    }

    __updatewallet(...params) {
        updatewallet(...params)
    }

    __deletewallet(...params) {
        deletewallet(...params)
    }

    __signature(...params) {
        signature(...params)
    }

}


// const myUtility = new Utility("f253d57f-1740-4603-9697-2dc1399eef73");
// const myUtility = new Utility("588defcd-92ad-4891-93c8-ddd5bf41ea9d");

// myUtility.init();
// myUtility.__nftforwallet("0xf7f9e7be5971dd17563dcbaa745975c0fb919669", 1);
// myUtility.__sftforwallet("0xf7f9e7be5971dd17563dcbaa745975c0fb919669", 1);
// myUtility.__tokensforwallet("0xf7f9e7be5971dd17563dcbaa745975c0fb919669", 1);
// myUtility.__getwallet("address");
// myUtility.__getwallets(1);
// myUtility.__createwallet(1, "test-1");
// myUtility.__updatewallet("42e9e745-fb71-4515-8f0a-db43ba8ec7fe", "test-420", true);
// myUtility.__deletewallet("42e9e745-fb71-4515-8f0a-db43ba8ec7fe");
// myUtility.__signature("0xda8d71c98b395d6ab86959bd64ece07cd2274411", "hello");


module.exports = Utility;