const express  = require("express")
const router =express.Router()
const collegeController = require("../Controller/collegeController")
const internController = require("../Controller/internController")



router.post("/functionup/colleges", collegeController.createCollege)
router.post("/functionup/interns", internController.createIntern)
router.get("/functionup/collegeDetails", collegeController.collegeDetails)

module.exports = router;