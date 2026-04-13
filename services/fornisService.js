import Forniseure from "../models/forniseureModel.js";

export async function creatForniseure(req, res) {
    const { name, contact } = req.body;

    const forniseure = await Forniseure.create({
        name,
        contact: {
            email: contact?.email || "",
            phone: contact?.phone || "",
            address: contact?.address || "",
        },
        clientId: req.user.userId,
    });

    // return forniseure;
    return {
        forniseure
    };
}

export async function grtAllFornisseure(req, res) {
    const fornisseoures = await Forniseure.find();
    return fornisseoures;
}

export const grtByIdFornisseure = async (req, res) => {
    try {
        const fornisseure = await Forniseure.findById(req.params.id);

        if (!fornisseure) {
            return res.status(404).json({
                success: false,
                message: "Fournisseur non trouvé",
            });
        }

        res.json({ success: true, data: fornisseure });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const updateFornisseure = async (req, res) => {
    try {
        const fornisseure = await Forniseure.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }, // Retourne le fournisseur mis à jour
        );

        if (!fornisseure) {
            return res.status(404).json({
                success: false,
                message: "Fournisseur non trouvé",
            });
        }

        return fornisseure;
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

export const deletFornisseure = async (req, res) => {
    try {
        const fornisseure = await Forniseure.findByIdAndDelete(req.params.id);
        return fornisseure;
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
