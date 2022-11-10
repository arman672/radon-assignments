const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const route = require("./routes/route")

const app = express();

app.use(bodyParser.json())

mongoose.connect("mongodb+srv://Arman:W0ZPcEp2jiZXKgid@cluster0.ilfh6.mongodb.net/Assignments")
    .then(()=> console.log("mongoose is connected"))
    .catch((err)=>console.log(err))

app.use("/", route)

app.listen(process.env.PORT || 3001, function(){
    console.log("express is running on port 3001")
})

 