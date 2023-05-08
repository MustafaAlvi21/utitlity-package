const axios = require('axios');
const URL = `https://api.utiliti.ai`;



async function GET_RESPONSE(url, apikey) {
    return await axios.get(`${URL}/${url}`)
        .then(res => {
            console.log("GET_RESPONSE", res.data);
            return res.data
        })
        .catch(err => {
            console.log(err.response.data);
            return err.response.data;
        })
}


async function POST_RESPONSE(url, body, apikey) {
    return await axios.post(`${URL}/${url}`, body)
        .then(res => {
            console.log("POST_RESPONSE", res.data);
            return res.data
        })
        .catch(err => {
            console.log(err.response.data);
            return err.response.data;
        })
}


async function PUT_RESPONSE(url, body, apikey) {
    return await axios.put(`${URL}/${url}`, body)
    .then(res => {
        console.log("PUT_RESPONSE", res.data);
        return res.data
    })
    .catch(err => {
        console.log(err.response.data);
        return err.response.data;
    })
}


async function DELETE_RESPONSE(url, apikey) {
    return await axios.delete(`${URL}/${url}`)
    .then(res => {
        console.log("DELETE_RESPONSE", res.data);
        return res.data
    })
    .catch(err => {
        console.log(err.response.data);
        return err.response.data;
    })
}


module.exports = {
    GET_RESPONSE,
    POST_RESPONSE,
    PUT_RESPONSE,
    DELETE_RESPONSE
}