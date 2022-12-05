const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const fieldSchema = new mongoose.Schema({
    regionId:{
        type: ObjectId,
    },
    location:{
        Latitude: {
            type: Number,
            required: true
        },
        Longitude: {
            type: Number,
            required: true
        }
    },
    address:{
        type: String,
        required: true
    },
    size:{
        type: String,
        required: true
    },
    crop_cycle_fields:{
        type: [ObjectId],
        ref: "CropCycleField" 
    },
    active_crop:{
        type: ObjectId,
        ref: crop
    }
},{timeStamp: true})

module.exports = mongoose.model("Field", fieldSchema)