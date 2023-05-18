const { GET_RESPONSE, POST_RESPONSE, PUT_RESPONSE, DELETE_RESPONSE } = require("../constants");



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




module.exports = {
    getnamespaces,
    createnamespaces,
    getmetadataitems,
    updatemetadataitem,
    createmetadataitem,
    getsinglemetadataitem,
    deletemetadataitem
}