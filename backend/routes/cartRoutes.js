const express = require("express");
const router = express.Router();

const {
  addToCart,
  getCart,
   updateCartQuantity,
} = require("../controllers/cartController");

const protect = require("../middleware/authMiddleware");

router.post("/add", protect, addToCart);
router.get("/", protect, getCart);
router.put("/update-quantity", protect, updateCartQuantity);

module.exports = router;