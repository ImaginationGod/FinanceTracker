import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../utils/api";

export default function EditTransaction() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
  });

  useEffect(() => {
    api.get(`/transactions`)
      .then(res => {
        const tx = res.data.find(t => t._id === id);
        if (tx) {
          setForm({
            title: tx.title,
            amount: tx.amount,
            date: tx.date.split("T")[0],
            category: tx.category,
          });
        }
      })
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/transactions/${id}`, {
        ...form,
        amount: Number(form.amount),
      });
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Transaction</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
        <input
          name="amount"
          type="number"
          value={form.amount}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-lg w-full"
        >
          Update
        </button>
      </form>
    </div>
  );
}
