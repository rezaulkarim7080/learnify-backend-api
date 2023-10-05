
const express = require("express");
const { getAllTestingProducts, getAllProducts, getSingleProduct } = require("../controllers/courses");

const router = express.Router();

// router.get("/", getAllProducts, getAllTestingProducts);
router.get("/", getAllProducts);
router.get("/testing", getAllTestingProducts);


module.exports = router;