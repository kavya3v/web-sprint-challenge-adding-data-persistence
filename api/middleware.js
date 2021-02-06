module.exports={
    validateProjectBody,
    validateResourceBody,
    validateTaskBody,}
  
    
    //projects
    function validateProjectBody(req,res,next){
        if ((!req.body.project_name) || (!req.body.project_description) || (!req.body.project_completed)){
            const err=new Error("Please provide Project name/description and completed status")
            err.statusCode=400;
            next(err)
        }else{
            next()
        }
    }
    
    //resources
    function validateResourceBody(req,res,next){
        if ((!req.body.resource_name) || (!req.body.resource_description) ){
            const err=new Error("Please provide name and description for the resource")
            err.statusCode=400;
            next(err)
        }else{
            next()
        }
    }
    
    //tasks
     
    function validateTaskBody(req,res,next){
        if ((!req.body.task_description) || (!req.body.task_notes) ||(!req.body.project_id) ){
            const err=new Error("Please provide description,notes and project ID for the task")
            err.statusCode=400;
            next(err)
        }else{
            next()
        }
    }
    