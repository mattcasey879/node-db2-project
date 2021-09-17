const express = require("express");
const Cars = require("./cars-model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const data = Cars.getAll();
    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", (req, res, next) => {

})


router.use((err, req, res, next) => {
    res.status( err.status || 500).json({ message: err.message })
})

module.exports = router;