import mongoose from "mongoose";
import Facture from "../models/factureModel.js"
import User from "../models/userModele.js"

const paymentSchema = new mongoose.Schema({
  facture: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Facture,
    required: true
  },
  montantPaye: {
    type: Number,
    required: true,
  },
  paymentDate: {
    type: Date,
    default: Date.now
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true
  },method :{
    type : String,
    require :true,
    enum :["cach" , "check" ,"bank_transfer"]
  }
}, {
  timestamps: true
});

const Payment = mongoose.model('Payment', paymentSchema);
export default Payment;