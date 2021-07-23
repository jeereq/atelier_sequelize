const express = require("express");

const shopController = require("../controllers/shop");

const router = express.Router();

router.get("/", shopController.getUser);
router.get("/user", shopController.getPost);

module.exports = router;
