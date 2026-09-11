const { body, validationResult } = require("express-validator");

const phoneRegex = /^[+]?[\d\s\-()]{7,20}$/;

const validateCreateEnquiry = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage("Name must be between 2 and 100 characters")
    .escape(),

  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .trim()
    .isEmail()
    .withMessage("Please provide a valid email address")
    .normalizeEmail(),

  body("phone")
    .notEmpty()
    .withMessage("Phone number is required")
    .trim()
    .matches(phoneRegex)
    .withMessage("Please provide a valid phone number"),

  body("userType")
    .notEmpty()
    .withMessage("User type is required")
    .isIn(["Student", "Customer", "Other"])
    .withMessage("User type must be Student, Customer, or Other"),

  body("interest")
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage("Interest cannot exceed 200 characters")
    .escape(),

  body("message")
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage("Message cannot exceed 1000 characters")
    .escape(),
];

const validateUpdateEnquiry = [
  body("name")
    .optional()
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage("Name must be between 2 and 100 characters")
    .escape(),

  body("email")
    .optional()
    .trim()
    .isEmail()
    .withMessage("Please provide a valid email address")
    .normalizeEmail(),

  body("phone")
    .optional()
    .trim()
    .matches(phoneRegex)
    .withMessage("Please provide a valid phone number"),

  body("userType")
    .optional()
    .isIn(["Student", "Customer", "Other"])
    .withMessage("User type must be Student, Customer, or Other"),

  body("interest")
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage("Interest cannot exceed 200 characters")
    .escape(),

  body("message")
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage("Message cannot exceed 1000 characters")
    .escape(),

  body("status")
    .optional()
    .isIn(["New", "Contacted", "In Progress", "Closed"])
    .withMessage(
      "Status must be New, Contacted, In Progress, or Closed"
    ),
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: errors.array().map((error) => ({
        field: error.path,
        message: error.msg,
      })),
    });
  }

  next();
};

module.exports = {
  validateCreateEnquiry,
  validateUpdateEnquiry,
  handleValidationErrors,
};