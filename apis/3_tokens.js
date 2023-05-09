const { GET_RESPONSE, POST_RESPONSE, PUT_RESPONSE, DELETE_RESPONSE } = require("../constants");




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



module.exports = {
    resynctokens
}