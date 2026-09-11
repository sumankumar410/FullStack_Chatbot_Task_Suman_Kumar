import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const api = axios.create({
  baseURL: `${BASE_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("dronetv_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const getErrorMessage = (error) => {
  return (
    error.response?.data?.message ||
    error.message ||
    "Something went wrong. Please try again later."
  );
};

export async function loginUser(data) {
  try {
    const response = await api.post("/auth/login", data);
    return response.data;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

export async function registerUser(data) {
  try {
    const response = await api.post("/auth/register", data);
    return response.data;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

export async function getAllEnquiries(params = {}) {
  try {
    const response = await api.get("/enquiries", { params });
    return response.data;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

export async function getEnquiryById(id) {
  try {
    const response = await api.get(`/enquiries/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

export async function createEnquiry(data) {
  try {
    const response = await api.post("/enquiries", data);
    return response.data;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

export async function updateEnquiry(id, data) {
  try {
    const response = await api.put(`/enquiries/${id}`, data);
    return response.data;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

export async function deleteEnquiry(id) {
  try {
    const response = await api.delete(`/enquiries/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}