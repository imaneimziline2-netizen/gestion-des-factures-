import {
    creatFacture,
    getAllFacture,
    getByIdFacture,
    updatFacture,
    deleteFacture
} from "../services/factureService.js";

const creatFactureController = async (req, res) => {
    const facture = await creatFacture(req, res);
};
const gatAllFactureController = async (req, res) => {
    const facture = await getAllFacture(req, res);
};
const getByIdFactureController = async (req, res) => {
    const facture = await getByIdFacture(req, res);
};
const updatFactureController = async (req, res) => {
    const facture = await updatFacture(req, res);
};
const deleteFactureContoller = async (req, res) => {
    const facture = await deleteFacture(req, res);
};

export {
    creatFactureController,
    gatAllFactureController,
    getByIdFactureController,
    updatFactureController,
    deleteFactureContoller
};
