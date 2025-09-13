import { useNavigate, useParams, Link } from "react-router-dom";
import api from "../utils/api";

export default function DeleteTransaction() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await api.delete(`/transactions/${id}`);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Delete Transaction</h1>
      <p className="mb-6">Are you sure you want to delete this transaction?</p>
      <div className="flex justify-center gap-4">
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Yes, Delete
        </button>
        <Link
          to="/"
          className="bg-gray-300 text-black px-4 py-2 rounded-lg"
        >
          Cancel
        </Link>
      </div>
    </div>
  );
}
