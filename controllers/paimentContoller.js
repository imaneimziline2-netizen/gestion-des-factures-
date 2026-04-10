import Facture from "../models/factureModel.js";
import creatPaiment from "../services/payService.js";

export const creatPaimentController = async (req, res) => {
    try {
        const { facture, payment } = await creatPaiment(req, res);

        return res.status(201).json({
            status: "success",
            payment,
            facture,
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};
