/*  -----------------------------------  */
/*           C O N S T A N T S           */
/*  -----------------------------------  */
const URL = `https://api.utiliti.ai`;


async function GET_RESPONSE(url) {
    try {
        return await axios.get(`${URL}/${url}`)
            .then(res => {
                console.log("GET_RESPONSE", res.data);
                return {
                    status: res.status,
                    message: res.statusText,
                    data: res.data
                };
            })

    } catch (err) {
        return {
            status: err.response.status,
            message: err.response.statusText,
            error: err.response.data
        };
    }
}

async function POST_RESPONSE(url, body) {
    try {
        return await axios.post(`${URL}/${url}`, body)
            .then(res => {
                console.log("POST_RESPONSE", res.data);
                return {
                    status: res.status,
                    message: res.statusText,
                    data: res.data
                };
            })

    } catch (err) {
        return {
            status: err.response.status,
            message: err.response.statusText,
            error: err.response.data
        };
    }
}

async function PUT_RESPONSE(url, body) {
    try {
        return await axios.put(`${URL}/${url}`, body)
            .then(res => {
                console.log("PUT_RESPONSE", res.data);
                return {
                    status: res.status,
                    message: res.statusText,
                    data: res.data
                };
            })

    } catch (err) {
        return {
            status: err.response.status,
            message: err.response.statusText,
            error: err.response.data
        };
    }
}

async function DELETE_RESPONSE(url) {
    try {
        return await axios.delete(`${URL}/${url}`)
            .then(res => {
                console.log("DELETE_RESPONSE", res.data);
                return {
                    status: res.status,
                    message: res.statusText,
                    data: res.data
                };
            })

    } catch (err) {
        return {
            status: err.response.status,
            message: err.response.statusText,
            error: err.response.data
        };
    }
}





/*  -----------------------------------  */
/*           C O N T R A C T S           */
/*  -----------------------------------  */

/**
* POST
* /contracts/{address}/resync
* Resync Contract Metadata
*/
async function resynccontractmetadata(address = null, network_id = null) {
    if (address == null || address == "") return "address is required";
    if (network_id == null || network_id == "") return "network_id is required";

    const url = `contracts/${address}?network_id=${network_id}`;
    return await POST_RESPONSE(url)
}


/**
* GET
* /contracts/{contract_address}/tokens
* Get Contract Nfts
*/
async function getcontractnfts(contract_address = null, network_id = null, page = null, limit = null) {
    const url = `contracts/${contract_address}/tokens`;
    let query = `?network_id=${network_id}`;

    if (contract_address == null || contract_address == "") return "contract_address is required";
    if (network_id == null || network_id == "") return "network_id is required";
    if (page != null && page != "") query += `&page=${page}`;
    if (limit != null && limit != "") query += `&limit=${limit}`;
  
    return await GET_RESPONSE(url + query);
}





/*  -----------------------------------  */
/*            M E T A D A T A            */
/*  -----------------------------------  */

/**
* GET
* /metadata
* Get Namespaces
*/
async function getnamespaces(page = null, limit = null) {
    const url = `metadata`;
    let query = `?`;

    if (page != null && page != "") query += `&page=${page}`;
    if (limit != null && limit != "") query += `&limit=${limit}`;
  
    return await GET_RESPONSE(url + query)
}


/**
* POST
* /metadata
* Create Namespace
*/
async function createnamespaces(namespace = null, description = null) {
    if (namespace == null || namespace == "") return "namespace is required";
    if (description == null || description == "") return "description is required";
    
    const url = `metadata`;
    let body = {
        namespace,
        description
    };
    
    return await POST_RESPONSE(url, body)
}


/**
* GET
* /metadata/{namespace}
* Get Metadata Items
*/
async function getmetadataitems(namespace = null, page = null, limit = null) {
    const url = `metadata/${namespace}`;
    let query = `?`;

    if (namespace == null || namespace == "") return "namespace is required";
    if (page != null && page != "") query += `&page=${page}`;
    if (limit != null && limit != "") query += `&limit=${limit}`;
  
    return await GET_RESPONSE(url + query)
}


/*
* PUT
* /metadata/{namespace}
* Update Metadata Item
*/
async function updatemetadataitem(namespace = null, id = null, name = null, image = null, description = null, attributes = null) {
    if (namespace == null || namespace == "") return "namespace required";

    if (id == null || id == "") return "id required";
    if (name == null || name == "") return "name required";
    if (image == null || image == "") return "image required";
    if (description == null || description == "") return "description required";
    if (attributes == null || attributes == "") return "attributes required";
    if (attributes.length == 0) return "attributes should be in JSON format e.g. array of objects";

    const url = `metadata/${namespace}`;
    let body = {
        id,
        name,
        image,
        description,
        attributes
    };

    return await PUT_RESPONSE(url, body)
}


/**
* POST
* /metadata/{namespace}
* Create Metadata Item
*/
async function createmetadataitem(namespace = null, id = null, name = null, image = null, description = null, attributes = null) {
    if (namespace == null || namespace == "") return "namespace is required";

    if (id == null || id == "") return "id required";
    if (name == null || name == "") return "name required";
    if (image == null || image == "") return "image required";
    if (description == null || description == "") return "description required";
    if (attributes == null || attributes == "") return "attributes required";
    if (attributes.length == 0) return "attributes should be in JSON format e.g. array of objects";

    
    const url = `metadata/${namespace}`;
    let body = {
        id,
        name,
        image,
        description,
        attributes
    };
    
    return await POST_RESPONSE(url, body)
}


/**
* GET
* /metadata/{namespace}/{id}
* Token Uri
*/
async function getsinglemetadataitem(namespace = null, id = null) {
    if (id == null || id == "") return "id is required";
    if (namespace == null || namespace == "") return "namespace is required";
    
    const url = `metadata/${namespace}/${id}`;
   
    return await GET_RESPONSE(url)
}


/*
* DELETE
* /metadata/{namespace}/{id}
* Delete Metadata Item
*/
async function deletemetadataitem(namespace = null, id = null) {
    if (id == null || id == "") return "id is required";
    if (namespace == null || namespace == "") return "namespace is required";

    const url = `metadata/${namespace}/${id}`;
    return await DELETE_RESPONSE(url)
}





/*  -----------------------------------  */
/*                N F T s                */
/*  -----------------------------------  */

/**
* GET
* /nfts/{token_id}
* Get Non Fungible Token
*/
async function getnfts(token_id = null, contract_address = null, network_id = null) {
    if (token_id == null || token_id == "") return "token_id is required";
    if (network_id == null || network_id == "") return "network_id is required";
    if (contract_address == null || contract_address == "") return "contract_address is required";
  
    const url = `nfts/${token_id}?contract_address=${contract_address}&network_id=${network_id}`;
    return await GET_RESPONSE(url)
}


/**
* PUT
* /nfts/resync
* Resync Nfts
*/
async function resyncnfts(address = null, network = null, token_ids = null) {
    if (address == null || address == "") return "address is required";
    if (network == null || network == "") return "network is required";
    if (network == 0) return "network should be greater than zero";
    if (token_ids == null || token_ids == "") return "token_ids is required";
    if (token_ids.length == 0) return "token_ids should be greater than zero";
  
    const body = {
        address,
        network,
        token_ids
      }

    const url = `nfts/resync`;
    return await PUT_RESPONSE(url, body)
}





/*  -----------------------------------  */
/*                S F T s                */
/*  -----------------------------------  */

/**
* PUT
* /sfts/resync
* Resync Sfts
*/
async function updateresyncnfts(address = null, network = null, owner = null, token_ids = null) {
    if (address == null || address == "") return "address is required";
    if (network == null || network == "") return "network is required";
    if (network == 0) return "network should be greater than zero";
    if (owner == null || owner == "") return "owner is required";
    if (token_ids == null || token_ids == "") return "token_ids is required";
    if (token_ids >= 0) return "token_ids should be greater than or equal to zero";
  
    const body = {
        address,
        network,
        owner,
        token_ids
      }

    const url = `sfts/resync`;
    return await PUT_RESPONSE(url, body)
}





/*  -----------------------------------  */
/*              T O K E N s              */
/*  -----------------------------------  */

/**
* PUT
* /tokens/resync
* Resync Tokens
*/
async function resynctokens(address = null, network = null, owner = null) {
    if (address == null || address == "") return "address is required";
    if (network == null || network == "") return "network is required";
    if (owner == null || owner == "") return "owner is required";

    let url = `tokens/resync`;
    const body = {
        address,
        network,
        owner
    }

    return await PUT_RESPONSE(url, body);
}





/*  -----------------------------------  */
/*             W A L L E T s             */
/*  -----------------------------------  */

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





/*  -----------------------------------  */
/*        T R A N S A C T I O N s        */
/*  -----------------------------------  */

/**
* POST
* /transactions/read
* Read Contract View Function
*/
async function readtx(chain_id = null, params = null, contract_address = null, abi = null, contract_function_name = null) {
    if (chain_id == null || chain_id == "") return "chain_id is required";
    if (params == null || params == "") return "params is required";
    if (contract_address == null || contract_address == "") return "contract_address is required";
    if (abi == null || abi == "") return "abi is required";
    if (contract_function_name == null || contract_function_name == "") return "function name is required";

    const body = {
        chain_id,
        params,
        contract_address,
        abi,
        contract_function_name,
    }
    const url = `transactions/read`;
    return await POST_RESPONSE(url, body)
}


/**
* POST
* /transactions
* Create Transaction
*/
async function createtx(chain_id = null, from_address = null, to_address = null, params = null, contract_address = null, abi = null, contract_function_name = null, gas_limit = null, gas_strategy = "SLOW") {
    if (chain_id == null || chain_id == "") return "chain_id is required";
    if (from_address == null || from_address == "") return "from_address is required";
    if (to_address == null || to_address == "") return "to_address is required";
    if (params == null || params == "") return "params is required";
    if (contract_address == null || contract_address == "") return "contract_address is required";
    if (abi == null || abi == "") return "abi is required";
    if (contract_function_name == null || contract_function_name == "") return "function name is required";
    if (gas_limit == null || gas_limit == "") return "gas_limit is required";
    if (gas_strategy == null || gas_strategy == "") return "gas_strategy is required";

    const body = {
        chain_id,
        "type": "TRANSFER",
        from_address,
        to_address,
        params,
        "contract": contract_address,
        abi,
        contract_function_name,
        gas_limit,
        gas_strategy
    }
    const url = `transactions`;
    return await POST_RESPONSE(url, body)
}


/**
* POST
* /transactions/meta
* Create Meta Transaction
*/
async function createmetatx(chain_id = null, from_address = null, to_address = null, forwarder_address = null, params = null, abi = null, contract_function_name = null, gas_limit = null, gas_strategy = "SLOW") {
    if (chain_id == null || chain_id == "") return "chain_id is required";
    if (from_address == null || from_address == "") return "from_address is required";
    if (to_address == null || to_address == "") return "to_address is required";
    if (forwarder_address == null || forwarder_address == "") return "forwarder_address is required";
    if (params == null || params == "") return "params is required";
    if (abi == null || abi == "") return "abi is required";
    if (contract_function_name == null || contract_function_name == "") return "function name is required";
    if (gas_limit == null || gas_limit == "") return "gas_limit is required";
    if (gas_strategy == null || gas_strategy == "") return "gas_strategy is required";

    const body = {
        chain_id,
        from_address,
        to_address,
        forwarder_address,
        params,
        abi,
        contract_function_name,
        gas_limit,
        gas_strategy
    }

    const url = `transactions/meta`;
    return await POST_RESPONSE(url, body)

}


/**
* GET
* /transactions/{transaction_id}
* Get Transactions
*/
async function getsingletx(transaction_id = null) {
    if (transaction_id == null || transaction_id == "") return "transaction_id is required";

    const url = `transactions/${transaction_id}`;
    return await GET_RESPONSE(url)
}


/**
* GET
* /transactions/group_by_wallet/{wallet_id}
* Get Wallet Transactions
*/
async function gettxofwallet(wallet_id = null, page = null, limit = null) {
    let query = `?`;
    
    if (wallet_id == null || wallet_id == "") return "wallet_id  is required";
    if (page != null && page != "") query += `&page=${page}`;
    if (limit != null && limit != "") query += `&limit=${limit}`;
  
    const url = `transactions/group_by_wallet/${wallet_id}`;
    return await GET_RESPONSE(url + query)
}


/**
* GET
* /transactions/{transaction_id}/status
* Get Transaction Status
*/
async function gettxstatus(transaction_id = null) {
    if (transaction_id == null || transaction_id == "") return "transaction_id is required";
  
    const url = `transactions/${transaction_id}/status`;
    return await GET_RESPONSE(url)
}





/*  -----------------------------------  */
/*             U T I L I T Y             */
/*  -----------------------------------  */

class Utility {
    constructor(apikey) { this.apikey = apikey; }

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
