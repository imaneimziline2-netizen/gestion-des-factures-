import {
    creatForniseure,
    grtAllFornisseure,
    grtByIdFornisseure
} from "../services/fornisService.js";

async function forniseureController(req, res) {
    try {
        const forniseur = await creatForniseure(req, res);

        return res.status(201).json({
            status: "success",
            fornisseure: forniseur,
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
}

async function grtAllFornisseurController(req, res) {
    try {
        const fornisseures = await grtAllFornisseure(req, res);
        return res
            .status(200)
            .json({ status: "success", fornisseures: fornisseures });
    } catch (err) {
        return res.status(500).json({
            status: "error",
            message: err.message,
        });
    }
}


async function grtByIdFornisseurController(req, res) {
    try {
        const fornisseure = await grtByIdFornisseure(req, res);
        return res
            .status(200)
            .json({ status: "success", fornisseure: fornisseure });
    } catch (err) {
        return res.status(500).json({
            status: "error",
            message: err.message,
        });
    }
}


export  {forniseureController ,grtAllFornisseurController,grtByIdFornisseurController};
