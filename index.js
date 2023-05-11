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
const {
    readtx,
    createtx,
    createmetatx,
    getsingletx,
    gettxofwallet,
    gettxstatus
} = require("./apis/2_transactions");
const {
    resynctokens
} = require("./apis/3_tokens");
const {
    resynccontractmetadata,
    getcontractnfts
} = require("./apis/4_contracts");
const {
    getnamespaces,
    createnamespaces,
    getmetadataitems,
    updatemetadataitem,
    createmetadataitem,
    getsinglemetadataitem,
    deletemetadataitem
} = require("./apis/5_metadata");
const {
    getnfts,
    resyncnfts
} = require("./apis/6_nfts");
const {
    updateresyncnfts
} = require("./apis/7_sfts");





class Utility {
    constructor(apikey) {
        this.apikey = apikey;
    }

    init() {
       axios.defaults.headers.common['accept'] = `'application/json'`;
        axios.defaults.headers.common['X-API-Key'] = `${this.apikey}`;
    }

    // Wallet APIs
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
    
    
    // Transaction APIs
    readTx(...params) {
        readtx(...params)
    }
    
    createTx(...params) {
        createtx(...params)
    }
    
    createMetaTx(...params) {
        createmetatx(...params)
    }
    
    getSingleTx(...params) {
        getsingletx(...params)
    }
    
    getTxOfWallet(...params) {
        gettxofwallet(...params)
    }
    
    getTxStatus(...params) {
        gettxstatus(...params)
    }


    // Tokens APIs
    resyncTokens(...params) {
        resynctokens(...params)
    }
    

    // Contracts APIs
    resyncContractMetadata(...params) {
        resynccontractmetadata(...params)
    }

    getContractNfts(...params) {
        getcontractnfts(...params)
    }


    // Metadata APIs
    getNamespaces(...params) {
        getnamespaces(...params)
    }

    createNamespaces(...params) {
        createnamespaces(...params)
    }

    getMetadataItems(...params) {
        getmetadataitems(...params)
    }

    updateMetadataItem(...params) {
        updatemetadataitem(...params)
    }

    createMetadataItem(...params) {
        createmetadataitem(...params)
    }

    getSingleMetadataItem(...params) {
        getsinglemetadataitem(...params)
    }

    deleteMetadataItem(...params) {
        deletemetadataitem(...params)
    }


    // Nfts APIs
    getNfts(...params) {
        getnfts(...params)
    }

    resyncNfts(...params) {
        resyncnfts(...params)
    }
    
    
    // Sfts APIs
    updateResyncnfts(...params) {
        updateresyncnfts(...params)
    }


}


// const myUtility = new Utility("f253d57f-1740-4603-9697-2dc1399eef73");
const myUtility = new Utility("588defcd-92ad-4891-93c8-ddd5bf41ea9d");
myUtility.init();

myUtility.nftForWallet("0xf7f9e7be5971dd17563dcbaa745975c0fb919669", 1);
myUtility.sftForWallet("0xf7f9e7be5971dd17563dcbaa745975c0fb919669", 1);
myUtility.tokensForWallet("0xf7f9e7be5971dd17563dcbaa745975c0fb919669", 1);
myUtility.getWallet("address");
myUtility.getWallets(1);
myUtility.createWallet(1, "test-1");
myUtility.updateWallet("42e9e745-fb71-4515-8f0a-db43ba8ec7fe", "test-420", true);
myUtility.deleteWallet("42e9e745-fb71-4515-8f0a-db43ba8ec7fe");
myUtility.getSignature("0xda8d71c98b395d6ab86959bd64ece07cd2274411", "hello");

// myUtility.readTx("0","hello","0xda8d71c98b395d6ab86959bd64ece07cd2274411","[]","hello");
// myUtility.createTx("0","0xda8d71c98b395d6ab86959bd64ece07cd2274411","0xda8d71c98b395d6ab86959bd64ece07cd2274411","ppp","0xda8d71c98b395d6ab86959bd64ece07cd2274411","[]","ppp","120","678687");
// myUtility.createMetaTx("0","0xda8d71c98b395d6ab86959bd64ece07cd2274411","0xda8d71c98b395d6ab86959bd64ece07cd2274411","0xda8d71c98b395d6ab86959bd64ece07cd2274411","ppp","[]","iii","1231","9798");
// myUtility.getSingleTx("transaction_id");
// myUtility.getTxOfWallet("42e9e745-fb71-4515-8f0a-db43ba8ec7fe","1","8");
// myUtility.getTxStatus("transaction_id");

// myUtility.resyncTokens("0xda8d71c98b395d6ab86959bd64ece07cd2274411", "1", "0xda8d71c98b395d6ab86959bd64ece07cd2274411");

// myUtility.resyncContractMetadata("0xda8d71c98b395d6ab86959bd64ece07cd2274411", "1");
// myUtility.getContractNfts("0xda8d71c98b395d6ab86959bd64ece07cd2274411", "1", "1", "1");

// myUtility.getNamespaces("1", "2");
// myUtility.createNamespaces("namespace = null", "description");
// myUtility.getMetadataItems("namespace = null", "page = null", "limit");
// myUtility.updateMetadataItem("namespace = null", "id = null", "name = null", "image = null", "description = null", "attributes = null");
// myUtility.createMetadataItem("namespace = null", "id = null", "name = null", "image = null", "description = null", "attributes = null");
// myUtility.getSingleMetadataItem("namespace = null", "id = null");
// myUtility.deleteMetadataItem("namespace = null", "id = null");

// myUtility.getNfts("token_id = null", "contract_address = null", "network_id = null");
// myUtility.resyncNfts("address = null", "network = null", "token_ids = null");

// myUtility.updateResyncnfts("address = null", "network = null", "owner = null", "token_ids = null");






module.exports = Utility;