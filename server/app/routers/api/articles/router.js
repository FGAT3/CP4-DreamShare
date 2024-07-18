const express = require("express");

const router = express.Router();

const { browse } = require("../../../controllers/articleActions");

router.get("/", browse);

module.exports = router;
