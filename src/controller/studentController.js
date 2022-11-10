const studentModel = require("../models/studentModel")

const add = async function(req,res){
   try{
        let studentData = req.body;
        let {name, marks, subject} = studentData

        let find = await studentModel.findOne({
            name: name,
            subject: subject,
            createdBy: req.loggedInUserId.toString()
        })

        if(find){
            find.marks += parseInt(marks);
            find.save()
            return res.status(201).send({ status: true, message: "details saved", data: find})
        }

        studentData["createdBy"] = req.loggedInUserId
        let savedData = await studentModel.create(studentData);
        return res.status(201).send({ status: true, message: "details saved", data: savedData})
   }catch(err){
        res.status(500).send({msg: err.message})
   }
}

const updateStudent = async function(req,res){
    try{
        let id = req.params.studentId;
        const data = req.body;
  
        const student = await studentModel.findOne({ _id: id, isDeleted: false })

        if (!student) {
            return res.status(404).send({ status: false, message: "No student exists with this student Id" })
        }

       
        if(req.loggedInUserId != student.createdBy.toString()) {
            return res.status(403).send({ status: false, message: "you are not authroized to perform this operation" });
        }

        if(data.name){
            student.name = data.name
        }
        if(data.subject){
            student.subject = data.subject
        }
        if(data.marks){
            student.marks = data.marks
        }

        student.save()
        return res.status(201).send({ status: true, message: "details updated", data: student})
    }catch(err){
        res.status(500).send({msg: "server error"})
    }
}

const deleteStudent = async (req, res) => {
    try {
        let studentId = req.params.studentId

        if (!studentId) {
            return res.status(400).send({ status: false, message: "studentId must be present in order to perform delete operation" })
        }

        let student = await studentModel.findOne({ _id: studentId, isDeleted: false })

        if (!student) {
            return res.status(404).send({ status: false, message: "No student exists with this student Id" })
        }

        if(req.loggedInUserId != student.createdBy.toString()) {
            
            return res.status(403).send({ status: false, message: "you are not authroized to perform this operation" });
        }

        await studentModel.findOneAndUpdate({ _id: studentId}, { $set: { isDeleted: true}})

        return res.status(200).send({ status: true, message: "Succesful" });
    } catch (err) { return res.status(500).send({ status: false, message: err.message }) }
}


const getStudents = async (req, res) => {
    try {
        let data = req.query
        let { name, subject } = data
        let filter = {
            isDeleted: false,
        };

        if (subject) {
            let findBySubject = await studentModel.find({ subject: subject })
            if (!findBySubject) {
                return res.status(404).send({ status: false, message: "no student with this Subject exists" })
            }
            filter["subject"] = subject
        }

        if (name) {
            let findByName = await studentModel.find({ name: name })
            if (!findByName) {
                return res.status(404).send({ status: false, message: "no students found for the given name" })
            }
            filter["name"] = name
        }

        let findStudent = await studentModel.find(filter)

        if (!findStudent.length) {
            return res.status(404).send({ status: false, message: "No students with found with the given filter"})
        }
        else {
            return res.status(200).send({ status: true, data: findStudent })
        }
    }
    catch (err) { return res.status(500).send({ status: false, message: err.message }) }
}

module.exports = {add, updateStudent, updateStudent, deleteStudent, getStudents}

