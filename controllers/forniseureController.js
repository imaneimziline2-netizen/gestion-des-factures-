import {
    creatForniseure,
    grtAllFornisseure,
    grtByIdFornisseure,
    updateFornisseure,
    deletFornisseure
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

async function updateFornisseureController(req, res) {
    const fornisseure = await updateFornisseure(req, res);
    return res
        .status(200)
        .json({ status: "success", fornisseure: fornisseure });
}

async function deletFornisseureController(req, res) {
    const fornisseure = await deletFornisseure(req, res);
    return res
        .status(200)
        .json({ status: "success", message: "fornisseure est suprimée" });
}



export {
    forniseureController,
    grtAllFornisseurController,
    grtByIdFornisseurController,
    updateFornisseureController,
    deletFornisseureController
};
