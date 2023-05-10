const { GET_RESPONSE, POST_RESPONSE, PUT_RESPONSE, DELETE_RESPONSE } = require("../constants");



/**
* GET
* /wallets/{wallet_address}/nfts
* Get Nfts For Wallet
*/
async function nftforwallet(wallet_address, network_id, contract_address = null, page = null, limit = null) {
    const url = `wallets/${wallet_address}/nfts`;
    let query = `?network_id=${network_id}`;

    if (contract_address != null && contract_address != "") query += `&contract_address=${contract_address}`;
    if (page != null && page != "") query += `&page=${page}`;
    if (limit != null && limit != "") query += `&limit=${limit}`;


    return await GET_RESPONSE(url + query)
}


/*
* GET
* /wallets/{wallet_address}/sfts
* Get Sfts For Wallet
*/
async function sftforwallet(wallet_address, network_id, contract_address = null, page = null, limit = null) {
    const url = `wallets/${wallet_address}/sfts`;
    let query = `?network_id=${network_id}`;

    if (contract_address != null && contract_address != "") query += `&contract_address=${contract_address}`;
    if (page != null && page != "") query += `&page=${page}`;
    if (limit != null && limit != "") query += `&limit=${limit}`;

    return await GET_RESPONSE(url + query)
}


/*
* GET
* /wallets/{wallet_address}/tokens
* Get Tokens For Wallet
*/
async function tokensforwallet(wallet_address, network_id, contract_address = null, page = null, limit = null) {
    const url = `wallets/${wallet_address}/tokens`;
    let query = `?network_id=${network_id}`;

    if (contract_address != null && contract_address != "") query += `&contract_address=${contract_address}`;
    if (page != null && page != "") query += `&page=${page}`;
    if (limit != null && limit != "") query += `&limit=${limit}`;

    return await GET_RESPONSE(url + query)
}


/*
* GET
* /wallets/{address}
* Get Wallet
*/
async function getwallet(address) {
    const url = `wallets/${address}`;
    return await GET_RESPONSE(url)
}


/*
* GET
* /wallets
* Get Wallets
*/
async function getwallets(network_id, page, limit) {
    const url = `wallets`;
    let query = `?`;
    if (network_id != null && network_id != "") query += `&network_id=${network_id}`;
    if (page != null && page != "") query += `&page=${page}`;
    if (limit != null && limit != "") query += `&limit=${limit}`;


    return await GET_RESPONSE(url + query)
}


/*
* POST
* /wallets
* Create Wallet
*/
async function createwallet(network_id = null, name = null) {
    if (network_id == null || network_id == "") return "network_id required";
    if (name == null || name == "") return "name required";

    const url = `wallets`;
    let body = {
        network_id,
        name
    };

    return await POST_RESPONSE(url, body)
}


/*
* PUT
* /wallets/{wallet_id}
* Update Wallet
*/
async function updatewallet(wallet_id = null, name = null, is_forwarder = null) {
    if (wallet_id == null || wallet_id == "") return "wallet_id required";
    if (name == null || name == "") return "name required";
    if ((is_forwarder == null || is_forwarder == "")) return "is_forwarder required";

    const url = `wallets/${wallet_id}`;
    let body = {
        name,
        is_forwarder: is_forwarder.toString()
    };

    return await PUT_RESPONSE(url, body)
}


/*
* DELETE
* /wallets/{wallet_id}
* Delete Wallet
*/
async function deletewallet(wallet_id = null) {
    if (wallet_id == null || wallet_id == "") return "wallet_id required";

    const url = `wallets/${wallet_id}`;
    return await DELETE_RESPONSE(url)
}


/*
* POST
* /wallets/{wallet_address}/signature
* Sign Message
*/
async function signature(wallet_address = null, message = null) {
    if (wallet_address == null || wallet_address == "") return "wallet_address required";
    if (message == null || message == "") return "message required";

    const url = `wallets/${wallet_address}/signature`;
    let body = { message };    

    return await POST_RESPONSE(url, body)
}



module.exports = {
    nftforwallet,
    sftforwallet,
    tokensforwallet,
    getwallet,
    getwallets,
    createwallet,
    updatewallet,
    deletewallet,
    signature
}