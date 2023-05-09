const { GET_RESPONSE, POST_RESPONSE, PUT_RESPONSE, DELETE_RESPONSE } = require("../constants");



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


module.exports = {
    resynccontractmetadata,
    getcontractnfts
}