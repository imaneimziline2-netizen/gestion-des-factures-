import Joi from 'joi';
const creatFacture = Joi.object({
    name: Joi.string().required(),
    fournisseur: Joi.string().required(),
    amount: Joi.number().required().min(0),
    dueDate: Joi.date().greater('now').required(),
    statut: Joi.string()
});

export default creatFacture;