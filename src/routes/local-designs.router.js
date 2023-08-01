const express = require("express");
const router = express.Router();
const localDesignsController = require("../controllers/local-designs.controller");

router
  .get("/", localDesignsController.get)
  .get("/:id", localDesignsController.getById)
  .post("/", localDesignsController.create)
  .put("/:id", localDesignsController.update)
  .delete("/:id", localDesignsController._delete);

module.exports = router;
