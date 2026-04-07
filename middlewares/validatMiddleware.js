import { createUser } from "../validator/userValidator.js"


export function validateMiddleware(req,res,next){
    const {error}=createUser.validate(req.body,{
        abortEarly:false
    })
    if(error){
        //const register=error.details[0].error.message
        // const register=error.details.map((err)=>{
        //     return {
        //         field:err.context.label,
        //         message:err.message
        //     }
        // })
        const register=error.details.map((err)=>({field:err.context.label, message:err.message}))
        res.status(422).json({
            register
        })
    }
    next();
}