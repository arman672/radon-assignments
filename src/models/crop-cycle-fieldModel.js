const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const cropCycleFieldSchema = new mongoose.Schema({
    FeildId:{
        type: ObjectId,
    },
    crop:{
        type: ObjectId,
        required: true,
        ref:"Crop"
    },
    cycleStart:{
        type: String,
        required: true
    },
    cycleEnd:{
        type: String,
        required: true
    },
    activeMonths:{
        type: [string],
        enum:["jan", "feb","mar","apr","may", "jun","jul", "aug","sep","oct","nov","dec"]
    }
},{timeStamp: true})

module.exports = mongoose.model("CropCycleField", cropCycleFieldSchema)