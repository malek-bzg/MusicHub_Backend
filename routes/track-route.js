const express = require("express")
const router = express.Router()
const TrackController = require("../controllers/track-controller")
//const upload = require('../middlewares/storage');
const multer = require('../multer-config')



router.put("/addMusicTr",multer, TrackController.addMusicTr)
router.route("/")

   .get(TrackController.getAll)
   .delete( TrackController.delete)
    .post( TrackController.add)
  
    .put( TrackController.edit)
  
   // .delete(TrackController.delete)
  
//router.delete("/all", TrackController.deleteAll)

// ta3tik el liste mta3 les branch
router.get("/get-my/:id",TrackController.getMy)

//ta3tik les branch mta3 el rep
router.get("/get-branch-of/:id",TrackController.branch_of)

//      ta3malek filter kima t7eb just zid & esm el param = val    --->       Localhost:3000/api/track/track-filter?musicProject=621f81c23395fb8a838d6e86

router.get("/track-filter",TrackController.my_branch_in)



router.post("/mix",multer,TrackController.mix)
// -----------------    python  --------------------
router.post("/addmix",multer,TrackController.addmix)//-------------++++


router.post("/cut",multer,TrackController.Cut_Audio)
// find by id  
router.get("/getbyid/:id",TrackController.findid)
module.exports = router