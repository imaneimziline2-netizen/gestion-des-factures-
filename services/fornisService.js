import Forniseure from "../models/forniseureModel.js";

export async function creatForniseure(req, res) {
    const { name, contact } = req.body;
    console.log(req.user.userId);

    const forniseure = await Forniseure.create({
        name,
        contact,
        clientId: req.user.userId,
    });

    return forniseure;
}

export async function grtAllFornisseure(res,req) {
    const fornisseoures = await Forniseure.find();
    return fornisseoures
}

export async function grtByIdFornisseure(res,req) {
    const {id} = req.params;
    const fornisseoure = await Forniseure.findById({id});
    if(!fornisseoure){
        return res.json({messsage : "fornisseure non trovée"})
    }
    return fornisseoure
}
