let allTasks=[];
const {v4:uuidv4} = require('uuid');
const crypto=require('crypto')
const uuidNumber = () => {
    const uuid = uuidv4();
    let uuidNum = (parseInt(uuid.replace(/-/g, ''), 16) % 80000) + 1;
    return crypto.randomInt(uuidNum)
}
const getAllTasks=(req,res)=>{
    res.json(allTasks);
}

const addTask=(req,res)=>{
    const id=uuidNumber();
    const {title,description,date}=req.body;
    const data={
        id,
        title,
        description,
        date
    }
    allTasks.push(data);
    res.json(allTasks);
}
const editTask=(req,res)=>{
    const tid=req.params.id;
    // console.log("hjadsha",id);
    const {title,description,date}=req.body;
    const data={
        tid,
        title,
        description,
        date
    }
    // const old=allTasks.find(f=> f.id==id);
    const index=allTasks.findIndex(e=>e.id==tid)
    console.log("indexxx :",index);
    if (index!==-1) {
        allTasks.splice(index,1,data)
        res.json(allTasks);
        console.log(allTasks)
    }
    else{
        res.send("task not found")
    }
}
const deleteTask=(req,res)=>{
    const id=req.params.id;
    console.log("ideee:",id);
    const deleteitem=allTasks.find(e=>e.id==id);
    if (deleteitem) {
        const deleted=allTasks.filter(f=>f!=deleteitem);
        res.json(deleted);
    }
    else{
        res.send("task not found")
    }
    
    
}
module.exports={
    getAllTasks,
    addTask,
    editTask,
    deleteTask
}