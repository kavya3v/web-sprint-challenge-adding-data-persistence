// build your `/api/tasks` router here

const router=require('express').Router();
const { validateTaskBody } = require('../middleware');
const dbModel= require('./model');
 
router.get('/', async (req,res,next)=>{
     try {
      const tasks= await dbModel.getTasks();
      res.status(200).json(tasks)
     } catch (err) {
           next(err)
     }  
})

router.post('/', validateTaskBody, async(req,res,next)=>{
      try {
          const [newTask]= await dbModel.addTask(req.body)
          res.status(201).json(newTask)
      } catch (err) {
            next(err)
      }
})


module.exports=router;
