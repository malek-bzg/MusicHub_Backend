const express = require("express")
const router = express.Router()
const PanierController = require("../controllers/musicproject-controller")
const upload = require('../middlewares/storage');
const MusicProject = require("../models/MusicProject");

router.route("/")

    .get(PanierController.getAll)
   
    .post( PanierController.add)
  
    .put( PanierController.edit)
  
    .delete(PanierController.delete)
  
router.delete("/all", PanierController.deleteAll)
//router.get("/get-my",PanierController.getMy)









router.get("/get-my",PanierController.getMy,async (req,res) => {
    console.log("11")
    res.json({prods:res.prods})
})








/*router.get ('/myProds:id',getProdsByUser,async (req,res) => {
    console.log("11")
    res.json({prods:res.prods})
})

async function getProdsByUser  (req,res,next){
    console.log("11-----------")
    let prods
    try {
        prods = await MusicProject.find({ user: req.params.id }).populate('User')
        if (prods == null){
            res.json({message:"sans produits"})
        }
    } catch (error) {
        res.json({message:error.message})

    }
    res.prods = prods
    next()
}
*/


module.exports = router