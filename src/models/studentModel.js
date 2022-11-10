const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId;

const studentSchema = new mongoose.Schema({ //dont forget new  
    name:{
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    marks: {
        type: Number,
        required: true
    },
    createdBy:{
        type: ObjectId,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default : false
    }
},{timestamps: true})

module.exports = mongoose.model('Student', studentSchema)