// build your `Project` model here
const db=require('../../data/dbConfig');

module.exports={getProjects,addProject}

async function getProjects(){
    const projects= await db("projects");
    return projects;
}

async function getProjectById(project_id){
    const project= await db("projects").where("project_id",project_id);
    return project;
}

async function addProject(newProject){
    const newId= await db("projects").insert(newProject)
    const addedProject= await getProjectById(newId)
    return addedProject;
}