const router = require("express").Router();
const employee = require("../controllers/employee.controller");
const student = require("../controllers/student.controller");
const car = require("../controllers/car.controller");
router.get("/getAllemployee", employee.findAll);
router.get("/getAllstudent", student.findAll);
router.get("/getAllcar", car.findAll);
module.exports = router;
