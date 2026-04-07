import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"],
        trim:true
    },
    email:{
        type:String,
        required:[true,"email is required"],
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:[true,"password"]
    },
    role:{
        type:String,
        enum:["admin","client"],
        default:"client"
    }
})
const User=mongoose.model("User",userSchema);
export default User