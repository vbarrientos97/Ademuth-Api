const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

exports.upload = upload.single("myFile");

exports.uploadFile = (req, res) => {
  const imageUrl = `/uploads/${req.file.filename}`;
  res.send({ imageUrl });
};
