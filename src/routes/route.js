const express = require("express")
const router = express.Router();
const orgController = require("../controllers/organization")
const propertyController = require("../controllers/property")

//organization routes
router.post("/createOrg", orgController.createOrganization)
router.get("/getOrg/:id", orgController.getOrganization)

//property routes
router.post("/createProperty", propertyController.createProperty)
router.get("/getProperty/:id", propertyController.getProperty)

router.all("/*",(req,res)=>{
    res.status(404).send({msg: `${req.url} -- url does not exist`})
})
module.exports = router;