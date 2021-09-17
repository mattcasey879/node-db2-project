const express = require("express");
const Cars = require("./cars-model");
const { checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique } = require("./cars-middleware")

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const data = await Cars.getAll();
    res.json(data)
  } catch (err) {
    next(err);
  }
});

router.get("/:id", checkCarId, async (req, res, next) => {
  res.json(res.car)

})

router.post("/", 
checkCarPayload, 
checkVinNumberValid, 
checkVinNumberUnique, 
(req, res, next) => {
  Cars.create(req.body)
  .then(car => {
    res.status(201).json(car)
  })
  .catch(next)
})


router.use((err, req, res, next) => {
    res.status( err.status || 500).json({ message: err.message })
})

module.exports = router;