import Joi from "joi";

const fournisseurSchema = Joi.object({
    name: Joi.string().required(),
    contact: Joi.object({
        email: Joi.string().email().optional().allow("", null).messages({
            "string.email": "Email invalide",
        }),
        phone: Joi.string().optional().allow("", null),
        address: Joi.string().optional().allow("", null),
    }).optional(),
});

export default fournisseurSchema;
