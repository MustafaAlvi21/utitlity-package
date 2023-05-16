const axios = require("axios");
const { resynctokens } = require("./apis/3_tokens");
const { updateresyncnfts } = require("./apis/7_sfts");
const { getnfts, resyncnfts } = require("./apis/6_nfts");
const { resynccontractmetadata, getcontractnfts } = require("./apis/4_contracts");
const { readtx, createtx, createmetatx, getsingletx, gettxofwallet, gettxstatus } = require("./apis/2_transactions");
const { nftforwallet, sftforwallet, tokensforwallet, getwallet, getwallets, createwallet, updatewallet, deletewallet, signature } = require("./apis/1_wallets");
const { getnamespaces, createnamespaces, getmetadataitems, updatemetadataitem, createmetadataitem, getsinglemetadataitem, deletemetadataitem } = require("./apis/5_metadata");





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
        return nftforwallet(...params)
    }

    sftForWallet(...params) {
        return sftforwallet(...params)
    }

    tokensForWallet(...params) {
        return tokensforwallet(...params)
    }

    getWallet(...params) {
        return getwallet(...params)
    }

    getWallets(...params) {
        return getwallets(...params)
    }

    createWallet(...params) {
        return createwallet(...params)
    }

    updateWallet(...params) {
        return updatewallet(...params)
    }

    deleteWallet(...params) {
        return deletewallet(...params)
    }

    getSignature(...params) {
        return signature(...params)
    }


    // Transaction APIs
    readTx(...params) {
        return readtx(...params)
    }

    createTx(...params) {
        return createtx(...params)
    }

    createMetaTx(...params) {
        return createmetatx(...params)
    }

    getSingleTx(...params) {
        return getsingletx(...params)
    }

    getTxOfWallet(...params) {
        return gettxofwallet(...params)
    }

    getTxStatus(...params) {
        return gettxstatus(...params)
    }


    // Tokens APIs
    resyncTokens(...params) {
        return resynctokens(...params)
    }


    // Contracts APIs
    resyncContractMetadata(...params) {
        return resynccontractmetadata(...params)
    }

    getContractNfts(...params) {
        return getcontractnfts(...params)
    }


    // Metadata APIs
    getNamespaces(...params) {
        return getnamespaces(...params)
    }

    createNamespaces(...params) {
        return createnamespaces(...params)
    }

    getMetadataItems(...params) {
        return getmetadataitems(...params)
    }

    updateMetadataItem(...params) {
        return updatemetadataitem(...params)
    }

    createMetadataItem(...params) {
        return createmetadataitem(...params)
    }

    getSingleMetadataItem(...params) {
        return getsinglemetadataitem(...params)
    }

    deleteMetadataItem(...params) {
        return deletemetadataitem(...params)
    }


    // Nfts APIs
    getNfts(...params) {
        return getnfts(...params)
    }

    resyncNfts(...params) {
        return resyncnfts(...params)
    }


    // Sfts APIs
    updateResyncnfts(...params) {
        return updateresyncnfts(...params)
    }


}



module.exports = Utility;