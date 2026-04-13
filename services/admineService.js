import Facture from "../models/factureModel.js";

export const getAdminDashboardStats = async () => {
  const result = await Facture.aggregate([
    {
      $group: {
        _id: null,
        totalInvoices: { $sum: "$amount" },
        totalExpenses: { $sum: "$montantPaye" }
      }
    }
  ]);

  const data = result[0] || {
    totalInvoices: 0,
    totalExpenses: 0
  };

  return {
    totalInvoices: data.totalInvoices,
    totalExpenses: data.totalExpenses,
    totalRemaining: data.totalInvoices - data.totalExpenses
  };
};