const express=require('express');
const app=express();
const route=require('./Router')
app.use(express.json());

//Using route
app.use('/',route)
app.listen(3000,()=>{
    console.log("server started on port 3000");
})