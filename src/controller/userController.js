const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken")

const registerUser = async function(req, res){
    try{
        let {name, email, password} = req.body; //dont forget .body
        let user = {
            name : name,
            email : email,
            password : password
        }
        
        let createdUser = await userModel.create(user)
        return res.status(201).send({status: true, msg: "user created successfully", data: createdUser})
    }catch(err){
        res.status(500).send({msg: err.message})
    }
}

const login = async function(req, res){
    try{
        let {email, password} = req.body;

        let user = await userModel.findOne({email: email})
        if(!user) return res.status(401).send({ status: false, message: "invalid credentials" })

        if(user.password != password) return res.status(401).send({ status: false, message: "invalid credentials" })

        let token = jwt.sign({ userId: user._id.toString() }, "sun", { expiresIn: "7d", });

        return res.status(200).send({ status: true, message: "User login successfull", data: {token: token} })

    }catch(err){
        res.status(500).send({msg: err.message})
    }
}

module.exports = {registerUser, login}