

import axios from "axios";
import React, { useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import { useSnackbar } from "notistack";
import { config } from "../config";

const TaskList = ({ refresh, onEdit }) => {
  const [taskList, setTaskList] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    fetchApi();
  }, [refresh]);

  const fetchApi = async () => {
    try {
      const response = await axios.get(config.endpoint);
      setTaskList(response.data.data);
    } catch (error) {
      console.log("Fetch Error:", error);
    }
  };

  const handleDelete = async (id) => {
    console.log("hello world i am deleting function ",id)
    try {
        let response = await axios.delete(`${config.endpoint}/${id}`)
        if(response.status===200)
        {
        enqueueSnackbar("Task is deleted", { variant: "success" });
        fetchApi();
        }
        else{
            enqueueSnackbar("Task is not deleted", { variant: "error" });
        }
    } catch (error) {
        
    }
  };

  return (
    <div className="px-4 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {taskList.map((task) => (
        <TaskCard
          key={task._id}
          {...task}
          onEdit={() => onEdit(task)}
          onDelete={() => handleDelete(task._id)}
        />
      ))}
    </div>
  );
};

export default TaskList;
