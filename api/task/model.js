// build your `Task` model here
 
const db=require('../../data/dbConfig');

module.exports={getTasks,addTask}

async function getTasks(){
 const tasks= await db("tasks as t")
 .join("projects as p","p.project_id","t.project_id") 
 .select("t.task_id","t.task_description","t.task_notes","t.task_completed","p.project_name","p.project_description") 
 return tasks;
}

async function getTaskById(task_id){
    const task= await db("tasks as t").where("task_id",task_id)        
    return task;
}

async function addTask(newTask){
    //include project id and desc
    const newId= await db("tasks").insert(newTask)
    const addedTask= await getTaskById(newId)
    return addedTask;
}