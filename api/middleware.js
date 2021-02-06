module.exports={
    validateProjectBody,
    validateResourceBody,
    validateTaskBody,
validateProjectId,
validateResourceId}

const dbModel= require('.././data/dbConfig');
const projectModel =require('./project/model');
const resourceModel=require('./resource/model');
    
    //projects
    function validateProjectBody(req,res,next){
        console.log('pro',req.body)
        if (!req.body.project_name) {
            console.log('here')
            const err=new Error("Please provide Project name")
            err.statusCode=400;
            next(err)
        }
        else{
            next()
        }
    }
    
    //resources
    function validateResourceBody(req,res,next){
        if (!req.body.resource_name){
            const err=new Error("Please provide name for the resource")
            err.statusCode=400;
            next(err)
        }else{
            next()
        }
    }
    
    //tasks
     
    function validateTaskBody(req,res,next){
        if (!req.body.task_description ||!req.body.project_id){
            const err=new Error("Please provide description and project ID for the task")
            err.statusCode=400;
            next(err)
        }else{
            next()
        }
    }

    //project ID
    async function validateProjectId(req,res,next){
        const project= await projectModel.getProjectById(req.params.id)
        if(project){
            req.project=project
            next()
        }else{
            res.status(404).json({message: "project ID invalid"})
        }
    }

     //resource ID
     async function validateResourceId(req,res,next){
        const resource= await resourceModel.getResourceById(req.params.id)
        if(resource){
            req.resource=resource
            next()
        }else{
            res.status(404).json({message: "resource ID invalid"})
        }
    }