const db = require("../config/db.config");

//Employee...
exports.findAll = (req, res) => {
  const sql = "select * from `employee`";
  db.query(sql, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
};
