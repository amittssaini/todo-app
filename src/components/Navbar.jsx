

export default function Navbar({onAddTask}) {
 
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow">
      <h1 className="text-2xl font-bold">Task Manager</h1>

      <button 
        onClick={onAddTask}
        className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold shadow hover:bg-gray-100"
      >
        + Add Task
      </button>
    </nav>
  );
}
