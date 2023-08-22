const express = require("express");
const router = express.Router();
const personsController = require("../controllers/persons.controller");

router
  .get("/", personsController.get)
  .get("/:id", personsController.getById)
  .post("/", personsController.create)
  .post("/register", personsController.create)
  .post("/login", personsController.login)
  .put("/:id", personsController.update)
  .delete("/:id", personsController._delete)
  .post("/logout", personsController.logout);

module.exports = router;
