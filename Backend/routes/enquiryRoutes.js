const express = require("express");

const {
  getAllEnquiries,
  getEnquiryById,
  createEnquiry,
  updateEnquiry,
  deleteEnquiry,
} = require("../controllers/enquiryController");

const {
  validateCreateEnquiry,
  validateUpdateEnquiry,
  handleValidationErrors,
} = require("../middleware/validateEnquiry");

const router = express.Router();

router.get("/", getAllEnquiries);

router.get("/:id", getEnquiryById);

router.post(
  "/",
  validateCreateEnquiry,
  handleValidationErrors,
  createEnquiry
);

router.put(
  "/:id",
  validateUpdateEnquiry,
  handleValidationErrors,
  updateEnquiry
);

router.patch(
  "/:id",
  validateUpdateEnquiry,
  handleValidationErrors,
  updateEnquiry
);

router.delete("/:id", deleteEnquiry);

module.exports = router;