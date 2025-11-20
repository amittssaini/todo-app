import { useState } from "react";
import { useSnackbar } from "notistack";
import { config } from "../config";
import axios from "axios";
export default function TaskForm({ onClose,defaultValue,onSuccess }) {
  const { enqueueSnackbar } = useSnackbar();

   const [formData, setFormData] = useState({
    title: defaultValue?.title || "",
    description: defaultValue?.description || "",
    status: defaultValue?.status || "pending",
  });

  // Update fields correctly
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const postFormTask = async (data) => {
  try {
    await axios.post(config.endpoint, data);

    enqueueSnackbar("Task added!", { variant: "success" });

    onSuccess();  // ⬅️ tells parent to refresh list
    onClose();    // ⬅️ closes modal
  } catch (error) {
    enqueueSnackbar("Error!", { variant: "error" });
  }
};

 
  const editFormTask=async(data)=>{
     if (formData.title.trim() === "") {
      enqueueSnackbar("Title should not be empty", { variant: "error" });
      return;
    }

    try {
      console.log(formData); 
      // here i call the api 
      enqueueSnackbar("Task updated successfully!", { variant: "success" });
       // close modal from here
       setFormData({title:"",description:""})
    } catch (error) {
      enqueueSnackbar("Something went wrong!", { variant: "error" });
    }    
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    postFormTask(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">

      <div className="bg-white w-[350px] sm:w-[420px] p-6 rounded-xl shadow-xl animate-[zoomIn_0.2s]">
        <h2 className="text-xl font-bold mb-4 text-center">
          {defaultValue ? "Edit Task" : "Add New Task"}
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>

          <input
            type="text"
            name="title"
            placeholder="Title"
            className="border p-2 rounded focus:outline-blue-500"
            value={formData.title}
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Description"
            className="border p-2 rounded h-20 resize-none focus:outline-blue-500"
            value={formData.description}
            onChange={handleChange}
          />

          <select
            name="status"
            className="border p-2 rounded focus:outline-blue-500"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>

          <div className="flex gap-3 mt-2">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Save
            </button>

            <button
              type="button"
              className="flex-1 bg-gray-300 py-2 rounded-lg hover:bg-gray-400 transition"
              onClick={onClose}
                 // <- CLOSE handled here locally!
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}
