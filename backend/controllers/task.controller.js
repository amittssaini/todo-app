const { post } = require("../routes/task.route")
const TaskService = require("../services/task.service");
const TaskServiceInstance = new TaskService();

const postTask =async(req,res)=>{
  try {
    const response = await TaskServiceInstance.postTask(req.body);
    res.status(201).json({sucess:true,data:response})
    //res.send(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
const getTasks =async(req,res)=>{
    try {
        const response = await TaskServiceInstance.getTasks();
        res.status(200).json({data:response,"sucess":true})
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
const getTask =async(req,res)=>{
    try {
        const id = req.params.id;
        const response = await TaskServiceInstance.getTask(id);
        if(response)
            res.status(200).json({"sucess":true,"data":"task is deleted"})
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
// const putTask =async(req,res)=>{
    
// }
const deleteTask =async(req,res)=>{
    try {
        const id = req.params.id;
        const response = await TaskServiceInstance.deleteTask(id);
        if(response)
            res.status(200).json({"sucess":true,"data":"task is deleted"})
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
 }

module.exports={getTasks,postTask,deleteTask}