import Facture from "../models/factureModel.js";
import Forniseure from "../models/forniseureModel.js";

const getStats = async (req, res) => {
  try {
    const { id } = req.params;

    const forniseure = await Forniseure.findById(id).select("_id name");

    if (!forniseure) {
      return res.status(404).json({ message: "Forniseure not found !" });
    }

    const factures = await Facture.find({ fournisseur: id });

    const stats = {
      totalInvoices: factures.length,
      totalAmount: 0,
      totalPaid: 0,
      totalRemaining: 0,
      byStatus: {
        paid: 0,
        unpaid: 0,
        partially_paid: 0,
      },
    };

    factures.forEach((f) => {
      stats.totalAmount += f.amount;
      stats.totalPaid += f.montantPaye;
      stats.totalRemaining += f.amount - f.montantPaye;

      stats.byStatus[f.statut]++;
    });

    const clientTotals = await Facture.aggregate([
      { $match: { client: req.user.userId } },
      {
        $group: {
          _id: null,
          totalClientAmount: { $sum: "$amount" },
        },
      },
    ]);

    const totalClientAmount = clientTotals[0]?.totalClientAmount || 0;

    const percentage =
      totalClientAmount === 0
        ? 0
        : (stats.totalAmount / totalClientAmount) * 100;

    return res.status(200).json({
      supplier: {
        id: forniseure._id,
        name: forniseure.name,
      },
      totalInvoices: stats.totalInvoices,
      totalAmount: stats.totalAmount,
      totalPaid: stats.totalPaid,
      totalRemaining: stats.totalRemaining,
      percentage,
      byStatus: stats.byStatus,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

export default getStats;