const { GET_RESPONSE, POST_RESPONSE, PUT_RESPONSE, DELETE_RESPONSE } = require("./constants");



async function getProducts(url_prefix) {
    let url = `${url_prefix}/products`;
    try {
        let res = await GET_RESPONSE(url);
        return res;
        
    } catch (error) {
        console.log(error);
    }
}


async function createProducts(url_prefix, body) {
    let url = `${url_prefix}/products`;      

    try {
        let res = await POST_RESPONSE(url, body);
        return res;
        
   } catch (error) {
        console.log(error);
    }
}


async function updateProducts(url_prefix, url_postfix, body) {
    let url = `${url_prefix}/products/${url_postfix}`;      

    try {
        let res = await PUT_RESPONSE(url, body);
        return res;
        
   } catch (error) {
        console.log(error);
    }
}


async function deleteProducts(url_prefix, url_postfix) {
    let url = `${url_prefix}/products/${url_postfix}`;      

    try {
        let res = await DELETE_RESPONSE(url);
        return res;
        
   } catch (error) {
        console.log(error);
    }
}


module.exports = {
    getProducts,
    createProducts,
    updateProducts,
    deleteProducts
}