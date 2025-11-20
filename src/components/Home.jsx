import { useState } from "react";
import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import TaskList from "./TaskList";
import axios from "axios";
import { config } from "../config";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleAddTask = () => {
    setEditData(null);
    setShowModal(true);
  };

  const handleEditTask = (task) => {
    setEditData(task);
    setShowModal(true);
  };

  const handleSuccess = () => {
    setRefresh(!refresh);
  };

  return (
    <>
      <Navbar onAddTask={handleAddTask} />

      {showModal && (
        <TaskForm
          onClose={() => setShowModal(false)}
          defaultValue={editData}
          onSuccess={handleSuccess}
        />
      )}

      <TaskList
        refresh={refresh}
        onEdit={handleEditTask}
      />
    </>
  );
}
