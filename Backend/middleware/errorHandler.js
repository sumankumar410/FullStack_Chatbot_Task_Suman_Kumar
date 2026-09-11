const mongoose = require("mongoose");

const errorHandler = (err, req, res, next) => {
  console.error(err);

  if (err instanceof mongoose.Error.ValidationError) {
    const errors = Object.values(err.errors).map((error) => ({
      field: error.path,
      message: error.message,
    }));

    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors,
    });
  }

  if (err instanceof mongoose.Error.CastError) {
    return res.status(400).json({
      success: false,
      message: "Invalid enquiry ID format",
    });
  }

  if (err.code === 11000) {
    return res.status(400).json({
      success: false,
      message: "Duplicate field value entered",
    });
  }

  return res.status(500).json({
    success: false,
    message: "Internal server error. Please try again later.",
  });
};

module.exports = errorHandler;