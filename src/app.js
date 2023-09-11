const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

const routerApi = require("./routes");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Welcome to the Application");
});

app.use("/uploads", express.static("uploads"));

routerApi(app);

app.listen(port, () => {
  console.log("listening on port", port);
});
