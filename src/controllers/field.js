const propertyModel = require("../models/propertyModel")
const orgModel = require("../models/organizationModel")
const fieldModel = require("../models/fieldModel")
const regionModel = require("../models/regionModel")
// regionId:{
//     type: ObjectId,
// },
// location:{
//     Latitude: {
//         type: Number,
//         required: true
//     },
//     Longitude: {
//         type: Number,
//         required: true
//     }
// },
// address:{
//     type: String,
//     required: true
// },
// size:{
//     type: String,
//     required: true
// },
// crop_cycle_fields:{
//     type: [ObjectId],
//     ref: "CropCycleField" 
// }
const createField = async function(req, res){
    try {
        
        const {regionId, location, address, size} = req.body
        const data ={
            "regionId" : regionId,
            "location" : location,
            "address": address,
            "size": size,
            "crop_cycle_fields": []
        }

        let query = {
            "location.Latitude" : location.Latitude,
            "location.Longitude" : location.Longitude,
            "regionId" : regionId
        }
       
        const checkField = await fieldModel.findOne(query)

        if(checkField) return res.status(400).send({msg: "Field already exist"})

        const savedData = await fieldModel.create(data)
        

        await regionModel.findOneAndUpdate(
            {_id: regionId},
            {$push :{fields: savedData._id}},
            {new: true})

       
        return res.status(201).send({msg: "successful", data: savedData})
    } catch (error) {
        return res.status(500).send(error)
    }
}


const getField = async function(req, res){
    try {
        let id = req.params.id
        if(id === "all"){
            const data = await fieldModel.find({})
            return res.status(200).send(data)
        }
        let data = await fieldModel.findById(id)
        return res.status(200).send(data)
    }
    catch (error) {
        return res.status(500).send({msg: error.msg})
    }
}

module.exports = {createField, getField}