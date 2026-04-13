import joi from "joi";
const createPaiment = joi.object({
    montantPaye: joi.number().required().positive()
});

export default createPaiment;