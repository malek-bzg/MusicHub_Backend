const express = require("express")
const router = express.Router()
const MpController = require("../controllers/musicproject-controller")
//const upload = require('../middlewares/storage');
const MusicProject = require("../models/MusicProject");
const multer = require('../multer-config')

router.route("/")

    .get(MpController.getAll)
   
    .post( multer,MpController.add)
  
    .put( MpController.edit)
  
    .delete(MpController.delete)
  
router.delete("/all", MpController.deleteAll)

// tafichilek les  repo el kol  mta3 el user 
router.get("/get-my/:id",MpController.getMy)


// tafichilek les  repo el public mta3 el user   localhost:3000/api/musicproject/get-my-public?type=public&user=123   
router.get("/mp-filter?",MpController.getMy_pub)


//tzid taswira ll MusicPro
router.put("/edit-Music-picture",multer, MpController.editMusicProjPicture)

//-------------------------------------------------
router.post("/send-inv", MpController.sendConfirmationEmail)
router.get("/confirmation/:token/:pr", MpController.confirmation)

//--------------------------------------------------


 

router.delete("/user-out",MpController.deleteuser)

module.exports = router