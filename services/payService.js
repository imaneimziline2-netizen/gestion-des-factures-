import Facture from "../models/factureModel.js";
import Payment from "../models/pimentModel.js";

export const creatPayment = async (req, res) => {
    try {
        const { montantPaye, paymentDate, method } = req.body;
        const factureId = req.params.id;
        console.log(factureId);

        const facture = await Facture.findOne({
            _id: factureId,
        });

        if (!facture) {
            return res.status(404).json({
                success: false,
                message: "Facture non trouvée",
            });
        }

        
        const payment = await Payment.create({
            facture: factureId,
            montantPaye: montantPaye,
            paymentDate: paymentDate || new Date(),
            client: req.user.userId,
            method,
        });
        
        facture.montantPaye += montantPaye;
        
        facture.restant = facture.amount - facture.montantPaye;
        
        if (facture.montantPaye === 0) facture.statut = "unpaid";
        else if (facture.montantPaye >= facture.amount) {
            facture.statut = "paid";
            facture.montantPaye = facture.amount;
        } else facture.statut = "partially_paid";

        await facture.save();

        res.status(201).json({
            success: true,
            payment,
            facture: {
                id: facture._id,
                statut: facture.statut,
                paye: facture.montantPaye,
                restant:  facture.restant,
            },
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const getfactureDetailsService = async (req, res) => {
    const { id } = req.params;
    const facture = await Facture.findById(id);
    if (!facture) {
        return res.status(404).json({ error: "facture non trouvé" });
    }
    const payments = await Payment.find({ facture: id })
        .select("method paymentDate amount")
        .sort({ paymentDate: -1 });
    return {
        facture: {
            id: facture._id,
            amount: facture.amount,
            totalPaid: facture.montantPaye,
            remainingAmount: facture.amount - facture.montantPaye,
            status: facture.statut,
        },
        payments: payments,
    };
};
