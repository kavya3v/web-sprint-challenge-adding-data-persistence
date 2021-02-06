// build your `/api/resources` router here
 
const router=require('express').Router();
const { validateResourceBody } = require('../middleware');
const dbModel= require('./model');
 
router.get('/', async (req,res,next)=>{
     try {
      const projects= await dbModel.getResources();
      res.status(200).json(projects)
     } catch (err) {
           next(err)
     }  
})

router.post('/', validateResourceBody, async(req,res,next)=>{
      try {
          const [newResource]= await dbModel.addResource(req.body)
          res.status(201).json(newResource)
      } catch (err) {
            next(err)
      }
})


module.exports=router;