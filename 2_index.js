const { getProducts, createProducts, updateProducts, deleteProducts } = require("./apis");
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



// async function getNftForwallet(wallet_address, network_id, contract_address = null, page = null, limit = null, apikey = null) {
//     const res = await nftforwallet(wallet_address, network_id, contract_address, page, limit, apikey)
//     console.log(res);
// }
// nftforwallet("0xf1d2ece72a2a97734685b292979dc516153a45da", "1", "0x5af0d9827e0c53e4799bb226655a1de152a425a5", "0", "100", "588defcd-92ad-4891-93c8-ddd5bf41ea9d")




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