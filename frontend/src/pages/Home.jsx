import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";

export default function Home() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    api.get("/transactions")
      .then(res => setTransactions(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>
      <Link
        to="/add"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-4 inline-block"
      >
        + Add Transaction
      </Link>

      <ul className="divide-y">
        {transactions.map(tx => (
          <li key={tx._id} className="py-3 flex justify-between items-center">
            <div>
              <p className="font-semibold">{tx.title}</p>
              <p className="text-sm text-gray-500">
                {tx.category} | {new Date(tx.date).toLocaleDateString()}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span
                className={`font-bold ${
                  tx.amount < 0 ? "text-red-500" : "text-green-500"
                }`}
              >
                {tx.amount < 0 ? "-" : "+"}${Math.abs(tx.amount)}
              </span>
              <Link
                to={`/${tx._id}/edit`}
                className="text-blue-500 hover:underline"
              >
                Edit
              </Link>
              <Link
                to={`/${tx._id}/delete`}
                className="text-red-500 hover:underline"
              >
                Delete
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
