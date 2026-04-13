import Facture from "../models/factureModel.js";
import creatPayment from "../services/payService.js";

export const creatPaimentController = async (req, res) => {
    try {
        const { facture, payment } = await creatPayment(req, res);

        return{
            status: "success",
            payment,
            facture,
        };
    } catch (error) {
         res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};
