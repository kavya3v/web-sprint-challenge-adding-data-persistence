// build your `Project` model here
const db=require('../../data/dbConfig');

module.exports={getProjects,addProject}

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