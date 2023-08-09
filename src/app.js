const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

dotenv.config();
const app = express();

const port = process.env.PORT || 3000;

const routerApi = require("./routes");

app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + extension);
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), (req, res) => {
  const fileURL = req.file.path;
  res.json({ url: fileURL });
});

app.get("/", (req, res) => {
  res.send("Welcome to the Application");
});

routerApi(app);

app.listen(port, () => {
  console.log("listening on port", port);
});
