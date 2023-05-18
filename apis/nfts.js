const { GET_RESPONSE, POST_RESPONSE, PUT_RESPONSE, DELETE_RESPONSE } = require("../constants");




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




module.exports = {
    getnfts,
    resyncnfts
}