const { GET_RESPONSE, POST_RESPONSE, PUT_RESPONSE, DELETE_RESPONSE } = require("../constants");



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




module.exports = {
    readtx,
    createtx,
    createmetatx,
    getsingletx,
    gettxofwallet,
    gettxstatus
}