const express = require("express");
const router = express.Router();
const colorsController = require("../controllers/colors.controller");

router
  .get("/", colorsController.get)
  .get("/:id", colorsController.getById)
  .post("/", colorsController.create)
  .put("/:id", colorsController.update)
  .delete("/:id", colorsController._delete);

module.exports = router;
