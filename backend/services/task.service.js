const taskModel = require("../models/task.model")
class Task{
   async postTask(task){
        try {
             //  title check
            const existingTask = await taskModel.findOne({
                title: { $regex: new RegExp("^" + task.title + "$", "i") }
            });

            if (existingTask) {
                throw new Error("Task title already exists (case-insensitive).");
            }
            // doc save
            const newTaskDoc = new taskModel(task);
            const response = await newTaskDoc.save();
            return response;
        } catch (error) {
            
            console.error("Error in postTask:", error.message);
            throw new Error(error.message || "Failed to create task");
        }
    }
   async getTasks(){
        try {
            const data = await taskModel.find({});
            if(data) return data
        } catch (error) {
            
        }
    }
    async getTask(id){
        try {
            const response = await taskModel.findById(id);
            return response;
        } catch (error) {
            
        }

    }
    async putTasks(id,data){
        try {

    // Remove undefined fields (in case the user didn't send them)
    const updateFields = {};
    if (data.title !== undefined) updateFields.title = data.title;
    if (data.description !== undefined) updateFields.description = data.description;
    if (data.status !== undefined) updateFields.status = data.status;

    const updatedDoc = await taskModel.findByIdAndUpdate(
      id,
      { $set: updateFields },
      { new: true, runValidators: true }  // return updated doc + apply validations
    );

    if (!updatedDoc) {
      const error = new Error("Task not found");
      error.status = 404;
      throw error;
    }

    return updatedDoc;

  } catch (err) {
    throw err;
  }
    }
    async deleteTask(id){
        try {
            const response = await taskModel.findByIdAndDelete(id);
            return response;
        } catch (error) {
            
        }
    }
}

module.exports =Task;