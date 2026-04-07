import mongoose from "mongoose"

export const fornisSchema = new mongoose.Schema({

    name:{
        type : String,
        require :true
    },
    email:{
        type: String,
        require :true
    },
    phone:{
        type: String,
        require :true
    },
    address:{
        type: String,
        require :true
    },
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})










// id

// name

// contact

// email

// phone

// address

// createdAt

// updatedAt

// userId