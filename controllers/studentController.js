const Student = require("../models/studentModel")

const getAllstudents = async (req, res) => {
    try {
        const students = await Student.find()
        return res.status(200).json(students)
    } catch (error) {
        res.status(500).json({message: "Error getting all students: " + error})
    }
}

const getAstudent = async (req, res) => {
    try{
        const singleStudent = await Student.findById(req.params.id)
        return res.status(200).json(singleStudent)
    } catch(error){
        res.status(500).json({message: "Error getting a student: " + error})
    }
}

const createAstudent = async (req, res) => {
    if(!req.body.name){
        return res.status(400).json({message: "Please enter your name"})
    }
    if(!req.body.email){
        return res.status(400).json({message: "Please enter your email"})
    }
    if(!req.body.phone){
        return res.status(400).json({message: "Please enter your phone"})
    }
    if(!req.body.password){
        return res.status(400).json({message: "Please enter your password"})
    }

    try {
        const newStudent = await Student.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
    
        })

        return res.status(201).json(newStudent)
    } catch (error) {
        return res.status(500).json({message: "Error creating a student: " + error})
    }
}

const updateAstudent = async (req, res) => {
    try {
        const updatedUser = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedUser) {
            return res.status(200).json(updatedUser);
        }
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
}

const deleteAstudent = async (req, res) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(req.params.id)
        if(deletedStudent){
            return res.status(200).json({message: "Student deleted successfully!"})
        }
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = {
    getAllstudents, 
    getAstudent,
    createAstudent,
    updateAstudent,
    deleteAstudent
}