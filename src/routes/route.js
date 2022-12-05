const express = require("express")
const router = express.Router();
const orgController = require("../controllers/organization")
const propertyController = require("../controllers/property")
const regionController = require("../controllers/region")
const fieldController = require("../controllers/field");
const cropController  = require("../controllers/crop");
const cropCycleController =require("../controllers/cropCycle")

//organization routes
router.post("/createOrg", orgController.createOrganization)
router.get("/getOrg/:id", orgController.getOrganization)

//property routes
router.post("/createProperty", propertyController.createProperty)
router.get("/getProperty/:id", propertyController.getProperty)

//region routes
router.post("/createRegion", regionController.createRegion)
router.get("/getRegion/:id", regionController.getRegion)

//field routes
router.post("/createField", fieldController.createField)
router.get("/getField/:id", fieldController.getField)

//crop routes
router.post("/createCrop", cropController.createCrop)
router.get("/getCrop/:id", cropController.getCrop)

//crop cycle routes
router.post("/createCropCycle",cropCycleController.createCropCycle)
router.get("/getCropCycleField/:id",cropCycleController.getCropCycleField)
router.get("/getCropCycleProperty/:id",cropCycleController.getCropCycleProperty)

router.all("/*",(req,res)=>{
    res.status(404).send({msg: `${req.url} -- url does not exist`})
})
module.exports = router;