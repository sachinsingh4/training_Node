const db = require("../config/db.config");

//car
exports.findAll = (req, res) => {
  const sql = "select * from `car`";
  db.query(sql, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
};
