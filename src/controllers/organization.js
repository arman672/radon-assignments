const orgModel = require("../models/organizationModel")

//========create org=========
const createOrganization = async function(req, res){
    try {
        const {name, email, password, address} = req.body
        
        const data ={
            "name" : name,
            "email" : email,
            "password": password,
            "address": address,
            "Properties": []
        }

        const checkEmail = await orgModel.findOne({email : email})
        if(checkEmail) return res.status(400).send({msg: "email already present"})

        const savedData = await orgModel.create(data)
        return res.status(201).send({msg: "organization created", data: savedData})
    } catch (error) {
        return res.status(500).send({msg: error.msg})
    }
}


//========= get organization All/One==========
const getOrganization = async function(req, res){
    try {
        let id = req.params.id
        if(id === "all"){
            const data = await orgModel.find({})
            return res.status(200).send(data)
        }
        let data = await orgModel.findById(id).populate("Properties")
        return res.status(200).send(data)
    }
    catch (error) {
        return res.status(500).send({msg: error.msg})
    }
}

module.exports = {createOrganization, getOrganization}