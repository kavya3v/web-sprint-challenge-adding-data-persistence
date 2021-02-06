module.exports={
    validateProjectBody,
    validateResourceBody,
    validateTaskBody,}
  
    
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
