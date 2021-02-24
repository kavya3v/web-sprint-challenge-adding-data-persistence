// build your `Resource` model here
 
const db=require('../../data/dbConfig');

module.exports={getResources,addResource}

async function getResources(){
    const resources= await db("resources");
    return resources;
}

async function getResourceById(resource_id){
    const resource= await db("resources").where("resource_id",resource_id);
    return resource;
}

async function addResource(newResource){
    const newId= await db("resources").insert(newResource)
    const addedResource= await getResourceById(newId)
    return addedResource;
}