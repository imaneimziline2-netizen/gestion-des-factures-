import Joi from "joi";

const fournisseurSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
});

export default fournisseurSchema;