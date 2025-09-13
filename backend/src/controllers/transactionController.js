import Transaction from "../models/Transaction.js";

export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ date: -1 });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching transactions" });
  }
};

export const createTransaction = async (req, res) => {
  try {
    const { title, amount, date, category } = req.body;

    const transaction = new Transaction({ title, amount, date, category });
    await transaction.save();

    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ message: "Error creating transaction" });
  }
};

export const updateTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    const { title, amount, date, category } = req.body;
    transaction.title = title || transaction.title;
    transaction.amount = amount || transaction.amount;
    transaction.date = date || transaction.date;
    transaction.category = category || transaction.category;

    const updated = await transaction.save();
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: "Error updating transaction" });
  }
};

export const deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    await transaction.deleteOne();
    res.status(200).json({ message: "Transaction deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting transaction" });
  }
};
