//Employee...
const Employee = require("../services/employee.service");
exports.findAll = (req, res) => {
  Employee.findAllEmployee(req, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
};

exports.putData = (req, res) => {
  Employee.putEmployee(req, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
};
