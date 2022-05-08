const express = require("express")
const router = express.Router()
const bandController = require("../controllers/band-controlller")
//const upload = require('../middlewares/storage');

const multer = require('../multer-config')


router.route("/")

    .get(bandController.getAll)
   
    .post(multer, bandController.add)
  
   .put( bandController.edit)
  
    .delete(bandController.delete)
  
router.delete("/all", bandController.deleteAll)

// tafichilek les  band el kol  mta3 el user 
router.get("/get-my/:id",bandController.getMy)


//tzid taswira ll MusicPro

router.put("/edit-Music-picture",multer, bandController.editBandPicture)






//-------------------------------------------------
router.post("/send-inv", bandController.sendConfirmationEmail)
router.get("/confirmation/:token/:pr", bandController.confirmation)

//--------------------------------------------------

router.delete("/get",bandController.deleteuser)
module.exports = router