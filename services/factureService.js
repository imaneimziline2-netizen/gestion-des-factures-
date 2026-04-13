import Facture from "../models/factureModel.js";
import Forniseure from "../models/forniseureModel.js";

export const creatFacture = async (req, res) => {
    try {
        const { fournisseur, amount, dueDate } = req.body;


        const fornisseure = await Forniseure.findOne({
            _id: fournisseur,
            clientId: req.user.userId,
        });

        if (!fornisseure) {
            return res.status(404).json({
                success: false,
                message: "Fournisseur non trouvé",
            });
        }

        const facture = await Facture.create({
            fournisseur: fournisseur,
            client: req.user.userId,
            amount,
            dueDate,
        });

        return res.status(201).json({
            success: true,
            data: facture,
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ success: false, message: err.message });
    }
};

export const getAllFacture = async (req, res) => {
    const factures = await Facture.find();
    return res.status(200).json({
        success: true,
        data: factures,
    });
};
export const getByIdFacture = async (req, res) => {
    const facture = await Facture.findById(req.params.id);

    if (!facture) {
        res.json({ success: false, message: "facture non trouvé" });
    }

    return res.status(200).json({
        success: true,
        data: facture,
    });
};

export const updatFacture = async (req, res) => {
    const facture = await Facture.findById(req.params.id);

    if (!facture) {
        return res.status(404).json({
            success: false,
            message: "facture non trouvée",
        });
    }

    if (facture.statut === "paid") {
        return res.status(400).json({
            success: false,
            message: "Impossible de modifier une facture déjà payée",
        });
    }

    const updatedFacture = await Facture.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
    );

    return res.status(200).json({
        success: true,
        facture: updatedFacture,
    });
};

export const deleteFacture = async (req, res) => {
    try {
        const facture = await Facture.findByIdAndDelete(req.params.id);

        if (!facture) {
            return res.status(404).json({
                success: false,
                message: "Facture non trouvée",
            });
        }

        res.json({
            success: true,
            message: "Facture supprimée avec succès",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
