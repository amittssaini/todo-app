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
            console.error("Error in fetching Task:", error.message);
            throw new Error(error.message || "Failed to fetching  task");
        }

    }

    async updateTask(id, data) {
    try {
         if (data.title) {
        const existing = await taskModel.findOne({
          title: { $regex: `^${data.title}$`, $options: "i" },
          _id: { $ne: id } // exclude the same task
        });

        if (existing) {
          throw new Error("Task title already exists (case-insensitive).");
        }
      }
      const updated = await taskModel.findByIdAndUpdate(id, data, {
        new: true,        
        runValidators: true,
      });

      return updated;
    } catch (error) {
            console.error("Error in updating Task:", error.message);
            throw new Error(error.message || "Failed to updating  task");
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