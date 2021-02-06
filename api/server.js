// build your server here
const express=require('express');
const helmet = require('helmet');
const projectsRouter = require('./project/router');
const resourcesRouter= require('./resource/router');
const tasksRouter = require('./task/router');

const server= express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects',projectsRouter)
server.use('/api/resources',resourcesRouter)
server.use('/api/tasks',tasksRouter)

server.get('/',(req,res)=>{
    res.send("hello from server!")
})

server.use((error,req,res,next)=>{
    const statusCode= error.statusCode ? error.statusCode : 500
    res.status(statusCode).json(error.message)
})

module.exports=server;
