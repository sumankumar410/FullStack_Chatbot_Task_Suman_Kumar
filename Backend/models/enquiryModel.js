const mongoose = require("mongoose");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\+?[\d\s\-()]{7,20}$/;

const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [100, "Name cannot exceed 100 characters"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [emailRegex, "Please provide a valid email address"],
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      match: [
        phoneRegex,
        "Please provide a valid phone number",
      ],
    },

    userType: {
      type: String,
      required: [true, "User type is required"],
      enum: {
        values: ["Student", "Customer", "Other"],
        message: "User type must be Student, Customer, or Other",
      },
    },

    interest: {
      type: String,
      trim: true,
      maxlength: [200, "Interest cannot exceed 200 characters"],
    },

    message: {
      type: String,
      trim: true,
      maxlength: [1000, "Message cannot exceed 1000 characters"],
    },

    status: {
      type: String,
      enum: {
        values: ["New", "Contacted", "In Progress", "Closed"],
        message: "Status must be New, Contacted, In Progress, or Closed",
      },
      default: "New",
    },
  },
  {
    timestamps: true,
  }
);

const Enquiry = mongoose.model("Enquiry", enquirySchema);

module.exports = Enquiry;