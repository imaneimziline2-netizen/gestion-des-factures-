import mongoose from "mongoose";
import User from "./userModele.js";
import Forniseure from "./forniseureModel.js";

const factureSchema = new mongoose.Schema({
  fournisseur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Forniseure',
    required: true
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  dueDate: {
    type: Date,
    required: true
  },
  statut: {
    type: String,
    enum: ['unpaid', 'partially_paid', 'paid'],
    default: 'unpaid'
  },
  montantPaye: {
    type: Number,
    default: 0
  },
  restant:{
    type : Number
  }
}, {
  timestamps: true
});

const Facture = mongoose.model("Facture",factureSchema);

export default Facture;