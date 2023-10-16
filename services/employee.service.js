const db = require("../config/db.config");

const findAllEmployee = (req, result) => {
  const address = req.query.address;
  const sql = "select * from `employee` where address =?";
  db.query(sql, [address], (err, data) => {
    result(err, data);
  });
};

const putEmployee = (req, result) => {
  const ename = req.body.ename;
  const address = req.body.address;
  const sql = "INSERT INTO `employee`(`ename`,`address`) VALUES(?,?)";
  db.query(sql, [ename, address], (err, data) => {
    result(err, data);
  });
};
module.exports = { findAllEmployee, putEmployee };
