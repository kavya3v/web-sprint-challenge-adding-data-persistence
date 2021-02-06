// build your `/api/projects` router here
const router=require('express').Router();
const { validateProjectBody,validateProjectId,validateResourceId } = require('../middleware');
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

//get list of project resources for a project ID
router.get('/:id/resources',validateProjectId,async(req,res,next)=>{
      try {
           const projResources= await dbModel.getResourcesForProject(req.params.id);
           res.status(200).json(projResources) 
      } catch (err) {
            next(err)
      }
})

//get list of project tasks for a project ID
router.get('/:id/tasks',validateProjectId,async(req,res,next)=>{
      try {
           const projTasks= await dbModel.getProjectTasks(req.params.id)
           res.status(200).json(projTasks) 
      } catch (err) {
            next(err)
      }
})

// Get all projects using a particular resource id.
router.get('/projectlist/:id', validateResourceId, async(req,res,next)=>{
      try {
           const projList= await dbModel.getProjectsByResource(req.params.id)
           res.status(200).json(projList) 
      } catch (err) {
            next(err)
      }
})

module.exports=router;