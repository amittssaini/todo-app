
import { MdEdit, MdDelete } from "react-icons/md";

export default function TaskCard({ id, title, description, status, onEdit ,onDelete }) {
  
  return (
    <div className="p-4 bg-white shadow rounded-xl border flex justify-between items-start">
      
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>

        <p className={`mt-1 px-3 py-1 text-sm rounded-full inline-block ${
          status === "completed"
            ? "bg-green-200 text-green-700"
            : "bg-yellow-200 text-yellow-700"
        }`}>
          {status}
        </p>
      </div>

      <div className="flex gap-3 text-xl">
        {/* Edit */}
        <button className="text-blue-600 hover:text-blue-900" onClick={onEdit}>
          <MdEdit />
        </button>

        {/* Delete */}
        <button className="text-red-500 hover:text-red-700" onClick={onDelete}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

