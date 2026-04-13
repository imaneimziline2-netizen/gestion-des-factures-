import Facture from "../models/factureModel.js";

export const statMiddleware = async (req, res, next) => {
    const { montantPaye } = req.body;
    const facture = await Facture.findById(req.params.id)
    
     if (facture.statut === "paid") {
        return res.status(500).json({ mrssage: "Facture est payé " });
    }
    if(montantPaye > facture.amount){
        return res.status(500).json({ mrssage: `Le montant du paiement ne peut pas dépasser ${facture.amount}`  });
    }

    next();
};
