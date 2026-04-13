import Facture from "../models/factureModel.js";

const getDashboard = async (req, res) => {
  try {
    const userId = req.user.userId;

    const factures = await Facture.find({ client: userId });

    let totalInvoices = 0;
    let totalExpenses = 0;

    factures.forEach((f) => {
      totalInvoices += f.amount;
      totalExpenses += f.montantPaye || 0;
    });

    const totalRemaining = totalInvoices - totalExpenses;

    return res.json({
      totalInvoices,
      totalExpenses,
      totalRemaining
    });

  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};

export default getDashboard;