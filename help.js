let allTasks=[];

const getAllTasks=(req,res)=>{
    res.json(allTasks);
}

const addTask=(req,res)=>{
    const data=req.body;
    console.log(data);
    allTasks.push(data);
    res.json(allTasks);
}
const editTask=(req,res)=>{
    const id=req.params.id;
    const data=req.body;
    // const old=allTasks.find(f=> f.id==id);
    const index=allTasks.findIndex(e=>e.id==id)
    console.log("indexxx :",index);
    if (index!==-1) {
        allTasks.splice(index,1,data)
        res.json(allTasks);
        console.log(allTasks)
    }
}
const deleteTask=(req,res)=>{
    const id=req.params.id;
    const deleteitem=allTasks.find(e=>e.id==id);
    const deleted=allTasks.filter(f=>f!==deleteitem);
    res.json(deleted);
}
module.exports={
    getAllTasks,
    addTask,
    editTask,
    deleteTask
}