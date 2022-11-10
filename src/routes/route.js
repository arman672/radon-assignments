const express = require("express")
const router = express.Router()
const user = require("../controller/userController")
const student = require("../controller/studentController")
const mw = require("../middleware/auth")

router.post("/registerUser", user.registerUser)
router.post("/login", user.login)

router.post("/addStudents",mw.authentication, student.add)
router.put("/updateStudent/:studentId",mw.authentication, student.updateStudent)
router.delete("/deleteStudent/:studentId",mw.authentication, student.deleteStudent)
router.get("/getStudents",mw.authentication, student.getStudents)

router.all("/*", function(req,res){
    res.status(404).send({msg: "no such api foung"})
})

module.exports = router