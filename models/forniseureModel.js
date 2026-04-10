import mongoose from "mongoose";

export const fornisSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Le nom du fournisseur est requis"],
            trim: true,
        },
        contact: {
            email: {
                type: String,
                lowercase: true,
                trim: true,
            },
            phone: {
                type: String,
                trim: true,
            },
            address: {
                type: String,
                trim: true,
            },
        },
        clientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const Forniseure = mongoose.model("Forniseure", fornisSchema);

export default Forniseure;
