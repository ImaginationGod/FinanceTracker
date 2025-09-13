import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AddTransaction from "../pages/AddTransaction";
import EditTransaction from "../pages/EditTransaction";
import DeleteTransaction from "../pages/DeleteTransaction";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddTransaction />} />
      <Route path="/:id/edit" element={<EditTransaction />} />
      <Route path="/:id/delete" element={<DeleteTransaction />} />
    </Routes>
  );
}
