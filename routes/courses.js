
const express = require("express");
const { getAllTestingProducts, getAllProducts, getSingleProduct } = require("../controllers/courses");

const router = express.Router();

// router.get("/", getAllProducts, getAllTestingProducts);
router.get("/courses", getAllProducts);
// router.get("/courses", getAllTestingProducts);


module.exports = router;
