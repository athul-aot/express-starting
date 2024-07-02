const express=require('express');
const route=express.Router();
const {getAllTasks,addTask,editTask,deleteTask}=require('./help')

//get All Tasks
route.get('/',getAllTasks);

//add new task
route.post('/addTask',addTask)

//edit a task
route.put('/editTask:id',editTask)

//delete a task
route.delete('/delete:id',deleteTask)

//export route module
module.exports=route;