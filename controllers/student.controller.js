const db = require("../config/db.config");
//Student
exports.findAll = (req, res) => {
  const sql = "select * from `student`";
  db.query(sql, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
};
