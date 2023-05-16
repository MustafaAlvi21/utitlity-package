const { GET_RESPONSE, POST_RESPONSE, PUT_RESPONSE, DELETE_RESPONSE } = require("../constants");



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




module.exports = {
    updateresyncnfts
}