"use strict";
exports.__esModule = true;
var express = require("express");
var openaiController_1 = require("../controllers/openaiController");
var router = express.Router();
router.post('/generateimage', openaiController_1.generateImage);
module.exports = router;
