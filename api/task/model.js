// build your `Task` model here
 
const db=require('../../data/dbConfig');

module.exports={getTasks,addTask}

function convertToBool(tasks){
    const modifiedBool= tasks.map(item=>{
    if(item.task_completed ===1){
        return {...item,task_completed:true}
    }else return {...item,task_completed:false}
})
    return modifiedBool;
}

async function getTasks(){
 const tasks= await db("tasks as t")
 .join("projects as p","p.project_id","t.project_id") 
 .select("t.task_id","t.task_description","t.task_notes","t.task_completed","p.project_name","p.project_description") 
 const modifiedBool = convertToBool(tasks);
    return modifiedBool;
}

async function getTaskById(task_id){
    // const task= await db("tasks as t").where("task_id",task_id) 
    const addedTask= await db("tasks").where("task_id",task_id).select("task_description","task_notes","task_completed")
    console.log('addedTask=',addedTask)
    const modifiedBool = convertToBool(addedTask);
    return modifiedBool;
}

async function addTask(newTask){
    const newId= await db("tasks").insert(newTask)
    const addedTask= await getTaskById(newId)
   
    return addedTask;
}