import createUser from "../validator/userValidator.js";
import fournisseurSchema from "../validator/forValidator.js";
import factureSchema from "../validator/factureValidator.js";
import createPaiment from "../validator/paimentValidator.js"

export function validateMiddleware(req, res, next) {
    const { error } = createUser.validate(req.body, {
        abortEarly: false,
    });
    if (error) {
        //const register=error.details[0].error.message
        // const register=error.details.map((err)=>{
        //     return {
        //         field:err.context.label,
        //         message:err.message
        //     }
        // })
        const register = error.details.map((err) => ({
            field: err.context.label,
            message: err.message,
        }));
        res.status(422).json({
            register,
        });
    }
    next();
}

export const validateFournisseurMiddleware = async (req, res, next) => {
    console.log(req.body);
    const { error } = fournisseurSchema.validate(req.body, {
        abortEarly: false,
    });
    if (error) {
        const register = error.details.map((err) => ({
            field: err.context.label,
            message: err.message,
        }));
        return res.status(422).json({
            register,
        });
    }
    next();
};

export const validateFactureMiddleware = async (req, res, next) => {
    const { error } = factureSchema.validate(req.body, {
        abortEarly: false,
    });
    if (error) {
        const register = error.details.map((err) => ({
            field: err.context.label,
            message: err.message,
        }));
        return res.status(422).json({
            register,
        });
    }
    next();
};

export const validatePaimentMiddleware = (req, res, next) =>{
    const { error } = createPaiment.validate(req.body, {
        abortEarly: false,
    });
    if (error) {
        const register = error.details.map((err) => ({
            field: err.context.label,
            message: err.message,
        }));
        return res.status(422).json({
            register,
        });
    }
    next();
};
