# 🚁 DroneTV AI Support & Lead Assistant

A full-stack web application for showcasing **commercial drone services**, **DGCA-certified training courses**, capturing enquiries, and managing leads through an admin dashboard.

## ✨ Features

* 🌐 Responsive landing page
* 🚁 Commercial drone services & courses
* 🤖 Rule-based AI support chatbot
* 📝 Customer/student enquiry form
* 🛡️ Admin dashboard for lead management
* 🔍 Search & filter enquiries
* 🔄 Enquiry status management
* 🔐 JWT authentication & Bcrypt password hashing
* ✅ Frontend & backend validation

## 🛠️ Tech Stack

**Frontend:** React.js, Vite, Tailwind CSS, React Router, Axios
**Backend:** Node.js, Express.js
**Database:** MongoDB Atlas, Mongoose
**Security:** JWT, BcryptJS, Helmet, CORS

## 📂 Structure

```text
Project/
├── Backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
└── client/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── services/
    │   └── utils/
    └── package.json
```

## ⚙️ Setup

### Backend

```bash
cd Backend
npm install
npm run dev
```

### Frontend

```bash
cd client
npm install
npm run dev
```

Create `.env` files with your MongoDB connection, JWT secret, and API URL.

## 🔗 API

```text
POST   /api/auth/login
POST   /api/auth/register
GET    /api/auth/me

GET    /api/enquiries
POST   /api/enquiries
PUT    /api/enquiries/:id
DELETE /api/enquiries/:id
```

## 🧠 Chatbot

The chatbot uses **rule-based keyword matching** to provide instant answers about DroneTV services, courses, registration, certification, and contact information.

## 🚀 Future Improvements

* LLM-powered chatbot
* Email notifications
* Admin analytics
* CSV/Excel lead export
* Cloud deployment

---

**Built with React, Node.js, Express & MongoDB.**
