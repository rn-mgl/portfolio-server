const controller = require("../controllers/message-controller");
const express = require("express");
const router = express.Router();

router.route("/").post(controller.sendMessage);

module.exports = router;
