import joi from "joi";
const createUser = joi.object({
    name: joi.string().required().min(2),
    email: joi.string().email().required(),
    password: joi.string().required(),
    confirmPassword: joi.ref("password"),
});

export default createUser;
