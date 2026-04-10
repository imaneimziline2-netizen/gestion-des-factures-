import Facture from "../models/factureModel.js";

export const statMiddleware = async (req, res, next) => {
    const { id,montantPaye } = req.params.id;
    const facture = await Facture.findById(id);
    if (!facture) {
        return res.status(500).json({ mrssage: "facture non trouvé" });
    }
     if (facture.statut === "paid") {
        return res.status(500).json({ mrssage: "facture est payé " });
    }
    if(montantPaye > facture.amount){
        return res.status(500).json({ mrssage: "Le montant du paiement ne peut pas dépasser :", amount });
    }

    next();
};
