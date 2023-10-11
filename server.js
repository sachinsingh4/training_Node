const express = require("express");
const router = require("./routes/route");
const cors = require("cors");
const app = express();

app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/api/employee", router);
app.use("/api/student", router);
app.use("/api/car", router);
app.listen(5000, () => {
  console.log("Ruuning on port 5000");
});
