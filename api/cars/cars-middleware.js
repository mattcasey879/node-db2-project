const Cars = require("./cars-model");
const vinValidator = require("vin-validator");

const checkCarId = (req, res, next) => {
  const { id } = req.params;
  Cars.getById(id).then((car) => {
    if (car) {
      res.car = car;
      next();
    } else {
      next({ status: 404, message: `car with id ${id} is not found` });
    }
  });
};

const checkCarPayload = (req, res, next) => {
  const error = { status: 400 };
  if (!req.body.vin) {
    error.message = "vin is missing";
    next(error);
  }
  if (!req.body.make) {
    error.message = "make is missing";
    next(error);
  }
  if (!req.body.model) {
    error.message = "model is missing";
    next(error);
  }
  if (!req.body.mileage) {
    error.message = "mileage is missing";
    next(error);
  } else {
    next();
  }
};

const checkVinNumberValid = (req, res, next) => {
  const { vin } = req.body;
  if (vinValidator.validate(vin)) {
    next();
  } else {
    next({ status: 400, message: `vin ${vin} is invalid` });
  }
};

const checkVinNumberUnique = async (req, res, next) => {
  const { vin } = req.body
  try {
    const exist = await Cars.getByVin(vin) 
    if (!exist) {
      next()
    } else {
      next({ status: 400, message: `vin ${vin} already exists`})
    }
  } catch (error) {
    next(error)
  }

};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
};
