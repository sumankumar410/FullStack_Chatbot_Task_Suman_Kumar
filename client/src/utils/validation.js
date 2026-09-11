export function validateName(name) {
  if (!name || typeof name !== "string" || !name.trim()) {
    return { isValid: false, error: "Name is required." };
  }
  const trimmed = name.trim();
  if (trimmed.length < 2) {
    return { isValid: false, error: "Name must be at least 2 characters long." };
  }
  if (trimmed.length > 100) {
    return { isValid: false, error: "Name cannot exceed 100 characters." };
  }
  return { isValid: true, error: "" };
}

export function validateEmail(email) {
  if (!email || typeof email !== "string" || !email.trim()) {
    return { isValid: false, error: "Email address is required." };
  }
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email.trim())) {
    return { isValid: false, error: "Please enter a valid email address." };
  }
  return { isValid: true, error: "" };
}

export function validatePhone(phone) {
  if (!phone || typeof phone !== "string" || !phone.trim()) {
    return { isValid: false, error: "Phone number is required." };
  }
  const regex = /^[+]?[\d\s\-()]{7,20}$/;
  if (!regex.test(phone.trim())) {
    return { isValid: false, error: "Please enter a valid phone number (7 to 20 digits)." };
  }
  return { isValid: true, error: "" };
}

export function validateUserType(userType) {
  const allowed = ["Student", "Customer", "Other"];
  if (!userType || !allowed.includes(userType)) {
    return { isValid: false, error: "Please select a valid user type (Student, Customer, or Other)." };
  }
  return { isValid: true, error: "" };
}

export function validateMessage(message) {
  if (message && typeof message === "string" && message.trim().length > 1000) {
    return { isValid: false, error: "Message cannot exceed 1000 characters." };
  }
  return { isValid: true, error: "" };
}

export function validateEnquiryForm(formData) {
  const errors = {
    name: "",
    email: "",
    phone: "",
    userType: "",
    message: "",
  };
  const nameRes = validateName(formData?.name);
  const emailRes = validateEmail(formData?.email);
  const phoneRes = validatePhone(formData?.phone);
  const userTypeRes = validateUserType(formData?.userType);
  const messageRes = validateMessage(formData?.message);
  if (!nameRes.isValid) errors.name = nameRes.error;
  if (!emailRes.isValid) errors.email = emailRes.error;
  if (!phoneRes.isValid) errors.phone = phoneRes.error;
  if (!userTypeRes.isValid) errors.userType = userTypeRes.error;
  if (!messageRes.isValid) errors.message = messageRes.error;
  const isValid = !errors.name && !errors.email && !errors.phone && !errors.userType && !errors.message;
  return { isValid, errors };
}