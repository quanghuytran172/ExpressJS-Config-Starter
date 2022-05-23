const express = require("express");
const router = express.Router();
const tokenHandler = require("../handlers/tokenHandler");
const { userController } = require("../controllers");

router.post("/", userController.create);

router.get("/", userController.getAll);

router.get("/:id", userController.getOne);

router.put("/:id", userController.update);

router.delete("/:id", userController.delete);

module.exports = router;
