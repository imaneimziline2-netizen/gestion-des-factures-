import {creatPayment,getfactureDetailsService} from "../services/payService.js";

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

export const getfactureDetailsServiceController = async (req,res)=>{
try{
    const facture = await getfactureDetailsService (req,res);
    return res.status(200).json({facture})
}catch (error) {
         res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
}
