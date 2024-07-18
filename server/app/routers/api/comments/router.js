const express = require("express");

const router = express.Router();

const { browse } = require("../../../controllers/commentActions");

router.get("/", browse);

module.exports = router;
