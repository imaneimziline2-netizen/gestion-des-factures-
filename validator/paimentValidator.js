import Joi from "joi";

const createPaiment = Joi.object({
    montantPaye: Joi.number().required().positive(),
    method: Joi.string().required()
});

export default createPaiment;