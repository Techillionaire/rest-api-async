const express = require("express")
const { getAllstudents, createAstudent, getAstudent, updateAstudent, deleteAstudent } = require("../controllers/studentController")
const router = express.Router()

router.route("/students").get(getAllstudents).post(createAstudent)
router.route("/students/:id").get(getAstudent).put(updateAstudent).delete(deleteAstudent)



module.exports = router