// build your `Project` model here
const db=require('../../data/dbConfig');

module.exports={getProjects,addProject,getResourcesForProject,getProjectById,getProjectTasks,getProjectsByResource}

async function getProjects(){
    const projects= await db("projects");
    const modifiedBool = convertToBool(projects);
    return modifiedBool;
}

 //convert to bool ! sqlite doesnt support storing as boolean !
function convertToBool(project){
    const modifiedBool= project.map(item=> {
        if (item.project_completed ===1){
            return {...item,project_completed:true}
        }else return {...item,project_completed:false}
    })
    return modifiedBool;
}

async function getProjectById(project_id){
    const project= await db("projects").where("project_id",project_id)
    const modifiedBool = convertToBool(project);
    return modifiedBool;
}

async function addProject(newProject){
    const newId= await db("projects").insert(newProject)
    const addedProject= await getProjectById(newId)
    return addedProject;
}

// get a list of project resources.
async function getResourcesForProject(project_id){
    const projResources=  await db("resources as r")
        .join("project_resources as pr","pr.resource_id","r.resource_id")
        .join("projects as p","p.project_id","pr.project_id")
        .where("p.project_id",project_id)       
        .select("p.project_name","p.project_description","r.resource_name","r.resource_description")
    console.log('proj resources=',projResources)
    return projResources;
}

// get a list of project tasks.
async function getProjectTasks(project_id){
 const projTasks=  await db("tasks as t")
    .join("projects as p","p.project_id","t.project_id")
    .where("p.project_id",project_id)       
    .select("p.project_name","p.project_description","t.task_description","t.task_notes")
console.log('proj tasks=',projTasks)
return projTasks;
}


// get a list of projects for a resource id
async function getProjectsByResource(resource_id){
    const projList=  await db("projects as p")
       .join("project_resources as pr","pr.project_id","p.project_id")
       .join("resources as r","r.resource_id","pr.resource_id")
       .where("r.resource_id",resource_id)       
       .select("p.project_name","p.project_description","r.resource_name")
   
   return projList;
   }