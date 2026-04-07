import joi from "joi";
export const createUser = joi.object({
  name: joi.string().required().min(2),
  email:joi.string().email().required(),
  password:joi.string().required(),
  confirmPassword:joi.ref("password")
});