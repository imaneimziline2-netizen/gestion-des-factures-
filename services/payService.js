import Facture from "../models/factureModel.js";
import Payment from "../models/pimentModel.js";

 const creatPayment = async (req, res) => {
  try {
    const { montantPaye, paymentDate } = req.body;
    const factureId = req.params.id;
    
    // Trouver la facture
    const facture = await Facture.findOne({
      _id: factureId,
      client: req.user.userId
    });
    
    if (!facture) {
      return res.status(404).json({
        success: false,
        message: "Facture non trouvée"
      });
    }
    
    // Vérifier le montantamount
    const restant = facture.amount - facture.montantPaye;
    // if (montantPaye > restant) {
    //   return res.status(400).json({
    //     success: false,
    //     message: `Montant maximum: ${restant}`
    //   });
    // }
    
    // Créer paiement
    const payment = await Payment.create({
      facture: factureId,
      montantPaye: montantPaye,
      paymentDate: paymentDate || new Date(),
      client: req.user.userId
    });
    
    // Mettre à jour facture
    facture.montantPaye += montantPaye;
    
    // Mettre à jour statut
    if (facture.montantPaye === 0) facture.statut = "unpaid";
    else if (facture.montantPaye >= facture.amount) {
      facture.statut = "paid";
      facture.montantPaye = facture.amount;
    } else facture.statut = "partially_paid";
    
    await facture.save();
    
    res.status(201).json({
      success: true,
      payment,
      facture: {
        id: facture._id,
        statut: facture.statut,
        paye: facture.montantPaye,
        restant:facture.amount - facture.montantPaye
      }
    });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export default creatPayment