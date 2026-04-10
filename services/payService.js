import Facture from "../models/factureModel.js";
import Payment from "../models/pimentModel.js";

export const creatPaiment = async (req, res) => {
    const { montantPaye, factureId } = req.body;

    const remainingAmount = Facture.amount - Facture.montantPaye;

    if (montantPaye > remainingAmount) {
        throw new Error(`Montant trop élevé. Maximum: ${remainingAmount}€`);
    }

    const payment = await Payment.create({
        facture: factureId,
        montantPaye,
        paymentDate: paymentDate || new Date(),
        client: req.user.userId,
    });

    Facture.montantPaye += montantPaye;

    // Mettre à jour le statut
    if (Facture.montantPaye === 0) {
        Facture.statut = "unpaid";
    } else if ((Facture.montantPaye = Facture.amount)) {
        Facture.statut = "paid";
        // Facture.montantPaye = Facture.amount;
    } else {
        Facture.statut = "partially_paid";
    }

    await Facture.save();

    return {
        payment,
        facture: {
            id: Facture._id,
            statut: Facture.statut,
            montantPaye: Facture.montantPaye,
            montantRestant: remainingAmount,
        },
    };
};
