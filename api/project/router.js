// build your `/api/projects` router here
const router=require('express').Router();
const { validateProjectBody } = require('../middleware');
const dbModel= require('./model');
 
router.get('/', async (req,res,next)=>{
     try {
      const projects= await dbModel.getProjects();
      res.status(200).json(projects)
     } catch (err) {
           next(err)
     }  
})

router.post('/', validateProjectBody, async(req,res,next)=>{
      try {
          const [newProject]= await dbModel.addProject(req.body)
          res.status(201).json(newProject)
      } catch (err) {
            next(err)
      }
})


module.exports=router;