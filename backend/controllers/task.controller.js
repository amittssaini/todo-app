
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
const putTask =async(req,res)=>{
    try {
      const id = req.params.id;
      const data = req.body;

      const updatedTask = await TaskServiceInstance.updateTask(id,data)

      if (!updatedTask) {
         res.status(404).json({
          success: false,
          message: "Task not found"
        });
      }

       res.status(200).json({
        success: true,
        message: "Task updated successfully",
        data: updatedTask,
      });

    } catch (err) {
      console.log(err);
       res.status(500).json({
        success: false,
        message: "Error updating task",
      });
    }
  }

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

module.exports={getTasks,postTask,deleteTask,putTask}