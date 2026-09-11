# DroneTV AI Support & Lead Assistant — Web Application

> **Practical Technical Take-Home Assignment**  
> **Candidate:** Full Stack Developer Intern  
> **Prepared for:** IPAGE Group — Talent & Engineering  
> **Reference Context:** [https://dronetv.in](https://dronetv.in)  

---

## 📌 1. Project Overview

**DroneTV AI Support & Lead Assistant** is a full-stack, component-driven web application designed to showcase DroneTV's commercial drone operations and DGCA-certified training courses. The platform features an interactive rule-based AI support assistant, lead capture system, secure admin management dashboard with search and filter capabilities, and robust JWT-based administrator authentication.

The application follows clean architecture principles with complete separation of concerns:
**React Frontend (Vite + Tailwind CSS)** ➔ **REST API (Express.js)** ➔ **Controller & Middleware Layer** ➔ **MongoDB Atlas Database**.

---

## ✨ 2. Key Features

### 🌐 Frontend (User Experience)
- **Responsive Landing / Home Page:** Hero banner, company statistics, featured services, featured courses, and dynamic call-to-actions.
- **Dedicated Services Section:** Catalog displaying aerial filming, topographical surveys, agricultural spraying, and structural inspections.
- **Courses & Training Section:** DGCA pilot training programs, duration, skill level badges, and direct enrollment triggers.
- **Lead / Enquiry Capture Form:** Real-time client-side validation, user type categorization (*Student* / *Customer* / *Other*), and friendly feedback messaging.
- **404 Not Found Handling:** Catch-all route to gracefully direct users back to safety.

### 🤖 Intelligent AI Support Chatbot
- **Rule-Based Predefined Q&A:** Instant answers for services, courses, registration steps, contact details, student perks, and DGCA certifications.
- **Conversation Session History:** Full session persistence with clean chat bubbles, user/bot avatars, and timestamps.
- **Graceful Fallbacks:** Intelligent handling for unrecognized queries with suggested helpful prompts.
- **Quick Suggestion Chips:** One-click interactive chips to trigger common customer queries.
- **Reset / Clear Conversation:** Instant chat reset option to start fresh.

### 🛡️ Admin Dashboard & Lead Management
- **Live Lead Monitoring:** Tabular and card-based inspection of all incoming customer and student enquiries.
- **Search & Filtering:** Real-time search across names, emails, and messages, with dropdown filtering by **User Type** (*Student* / *Customer*) and **Status**.
- **Status Lifecycle Control:** Update enquiry status (*New* ➔ *Contacted* ➔ *In Progress* ➔ *Closed*).
- **Enquiry Deletion:** Delete records with confirmation safeguards.

### 🔒 Enterprise-Grade Security & Authentication
- **Admin Authentication:** Secure JWT (JSON Web Token) token generation and cryptjs password hashing.
- **Protected Routes:** Unauthorized users are automatically redirected to /login when attempting to access /admin.
- **Dual-Layer Validation:** Inputs validated on both frontend and server-side with express-validator.
- **Data Sanitization:** Strict escaping and trimming against XSS and injection vulnerabilities.
- **Security Headers & CORS:** Protected via helmet and safe cross-origin request handling.

---

## 🛠️ 3. Tech Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Frontend Library** | React.js (v19) | Modern component-driven functional architecture with hooks |
| **Build Tool** | Vite (v8) | Ultra-fast development environment and optimized production bundling |
| **Styling** | Tailwind CSS (v4) | Utility-first responsive design across mobile, tablet, and desktop |
| **Routing** | React Router DOM (v7) | Declarative client-side routing with protected admin wrapper |
| **HTTP Client** | Axios | Configured with base URLs, timeout handling, and Bearer token interceptor |
| **Icons** | React Icons | Feather Icons, Hero Icons, and FontAwesome SVG icons |
| **Backend Runtime** | Node.js | Asynchronous, event-driven JavaScript server environment |
| **Web Framework** | Express.js (v5) | Modular REST API routing, controllers, and middleware pipeline |
| **Database** | MongoDB Atlas | Cloud-hosted NoSQL relational document database |
| **ODM** | Mongoose (v9) | Schema definition, model validation, and query abstraction |
| **Auth & Security** | JWT & BcryptJS | Token-based stateless authentication and salted password hashing |
| **Validation** | Express-Validator | Robust server-side request sanitization and schema enforcement |
| **Security** | Helmet & CORS | HTTP header security and controlled cross-origin access |

---

## 📂 4. Project Folder Structure

`	ext
Assignment-Project/
├── Backend/
│   ├── config/
│   │   └── db.js                    # MongoDB Atlas connection setup
│   ├── controllers/
│   │   ├── authController.js        # Admin register, login & profile logic
│   │   └── enquiryController.js     # Full CRUD business logic for leads
│   ├── middleware/
│   │   ├── authMiddleware.js        # JWT token verification for protected endpoints
│   │   ├── errorHandler.js          # Global centralized error handler
│   │   └── validateEnquiry.js       # Input validation & sanitization rules
│   ├── models/
│   │   ├── enquiryModel.js          # Mongoose schema for customer enquiries
│   │   └── userModel.js             # Mongoose schema for admin users (bcrypt hashed)
│   ├── routes/
│   │   ├── authRoutes.js            # Authentication routes (/api/auth)
│   │   └── enquiryRoutes.js         # Enquiry CRUD routes (/api/enquiries)
│   ├── .env                         # Secrets (DB URI, PORT, JWT_SECRET)
│   ├── .gitignore                   # Ignores node_modules, .env
│   ├── package.json                 # Backend dependencies & run scripts
│   └── server.js                    # Server entry point & Express pipeline
│
└── client/                          # React + Tailwind Frontend
    ├── public/                      # Static icons & assets
    ├── src/
    │   ├── components/              # Modular UI Components
    │   │   ├── ChatMessage/         # Individual bot & user chat bubbles
    │   │   ├── CourseCard/          # Course display card with level badges
    │   │   ├── EnquiryCard/         # Admin enquiry card with status & delete
    │   │   ├── EnquiryForm/         # Customer lead submission form
    │   │   ├── Footer/              # Responsive 3-column footer
    │   │   ├── Navbar/              # Sticky navigation with mobile menu & auth state
    │   │   └── ServiceCard/         # Services card with hover animations
    │   ├── pages/                   # Application Views / Screens
    │   │   ├── Admin/               # Protected admin management dashboard
    │   │   ├── Chat/                # Fullscreen AI assistant chat interface
    │   │   ├── Contact/             # Contact page with enquiry form & office info
    │   │   ├── Courses/             # Training courses catalog
    │   │   ├── Home/                # Landing page with hero & sections
    │   │   ├── Login/               # Administrator login view
    │   │   ├── Services/            # Commercial drone services catalog
    │   │   └── Signup/              # Administrator account registration view
    │   ├── services/
    │   │   └── api.js               # Centralized Axios client & API methods
    │   ├── types/
    │   │   └── index.js             # Constants, services list, courses list & status
    │   ├── utils/
    │   │   ├── chatbotLogic.js      # Rule-based keyword matching & fallback engine
    │   │   └── validation.js        # Reusable client-side form validation rules
    │   ├── App.jsx                  # Main router setup & ProtectedRoute wrapper
    │   ├── index.css                # Tailwind CSS root imports
    │   └── main.jsx                 # React root renderer
    ├── .env                         # Frontend environment variable (VITE_API_URL)
    ├── .gitignore                   # Ignores node_modules, dist, .env
    ├── index.html                   # HTML5 document template
    ├── package.json                 # Frontend dependencies & Vite scripts
    └── vite.config.js               # Vite configuration with Tailwind plugin
`

---

## ⚙️ 5. Setup & Installation Instructions

### Prerequisites
- **Node.js**: v18.0.0 or higher installed on your system.
- **NPM**: v9.0.0 or higher.
- **MongoDB**: Access to a MongoDB Atlas cluster (or local MongoDB).

---

### Step 1: Clone or Extract the Repository
`ash
git clone https://github.com/<YOUR_GITHUB_USERNAME>/FullStack_Chatbot_Task_FirstName_LastName.git
cd FullStack_Chatbot_Task_FirstName_LastName
`

---

### Step 2: Backend Setup
1. Navigate to the backend directory:
   `ash
   cd Backend
   `
2. Install dependencies:
   `ash
   npm install
   `
3. Create a .env file in Backend/ with the following values:
   `env
   PORT=5000
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.0ajfg4n.mongodb.net/dronetv_db
   NODE_ENV=development
   JWT_SECRET=dronetv_super_secret_jwt_key_2025
   `
4. Start the backend server:
   `ash
   npm run dev
   `
   *Expected Console Output:*
   `	ext
   MongoDB Connected: ac-3unkldl-shard-00-xx.0ajfg4n.mongodb.net
   Server running on http://localhost:5000
   API Base URL: http://localhost:5000/api/enquiries
   `

---

### Step 3: Frontend Setup
1. Open a new terminal and navigate to the frontend directory:
   `ash
   cd client
   `
2. Install dependencies:
   `ash
   npm install
   `
3. Create a .env file in client/ with:
   `env
   VITE_API_URL=http://localhost:5000
   `
4. Start the Vite development server:
   `ash
   npm run dev
   `
   *The frontend will open at:* http://localhost:5173

---

## 🔑 6. Default Administrator Credentials

A default administrator account has been pre-seeded in the database for instant evaluator access:

| Field | Value |
| :--- | :--- |
| **Login URL** | http://localhost:5173/login |
| **Email** | dmin@dronetv.in |
| **Password** | dmin123 |
| **Role** | dmin |

*(You can also register a new admin account anytime at /signup)*

---

## 📡 7. REST API Documentation

Base URL: http://localhost:5000/api

### Authentication Endpoints (/api/auth)

| Method | Endpoint | Access | Purpose | Request Payload | Response |
| :--- | :--- | :--- | :--- | :--- | :--- |
| POST | /auth/register | Public | Register a new administrator | { "name", "email", "password" } | 201 Created with JWT Token & User |
| POST | /auth/login | Public | Authenticate administrator | { "email", "password" } | 200 OK with JWT Token & User |
| GET | /auth/me | Protected | Fetch current logged-in user details | Header: Bearer <token> | 200 OK with User object |

### Enquiry Endpoints (/api/enquiries)

| Method | Endpoint | Access | Purpose | Request Payload / Query Params | Response |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GET | /enquiries | Public | Retrieve all enquiries (with filters & search) | Query: ?search=rahul&userType=Student&status=New | 200 OK { success: true, count, data: [] } |
| GET | /enquiries/:id | Public | Fetch a single enquiry by MongoDB ID | Parameter: id | 200 OK { success: true, data: {} } |
| POST | /enquiries | Public | Submit a new lead / enquiry | { "name", "email", "phone", "userType", "interest", "message" } | 201 Created { success: true, message, data } |
| PUT | /enquiries/:id | Public | Update status or enquiry fields | { "status": "In Progress" } | 200 OK { success: true, data } |
| DELETE | /enquiries/:id | Public | Permanently remove an enquiry | Parameter: id | 200 OK { success: true, message } |

---

## 🗄️ 8. Database Architecture

### Enquiry Schema (models/enquiryModel.js)
`javascript
{
  name:      { type: String, required: true, minlength: 2, maxlength: 100, trim: true },
  email:     { type: String, required: true, lowercase: true, trim: true },
  phone:     { type: String, required: true, trim: true },
  userType:  { type: String, required: true, enum: ['Student', 'Customer', 'Other'] },
  interest:  { type: String, maxlength: 200, trim: true },
  message:   { type: String, maxlength: 1000, trim: true },
  status:    { type: String, enum: ['New', 'Contacted', 'In Progress', 'Closed'], default: 'New' },
  createdAt: { type: Date },
  updatedAt: { type: Date }
}
`

### User Schema (models/userModel.js)
`javascript
{
  name:      { type: String, required: true, trim: true },
  email:     { type: String, required: true, unique: true, lowercase: true, trim: true },
  password:  { type: String, required: true, minlength: 6, select: false }, // Bcrypt hashed
  role:      { type: String, enum: ['admin', 'user'], default: 'admin' },
  createdAt: { type: Date },
  updatedAt: { type: Date }
}
`

---

## 📸 9. Application Screenshots

| Page / Component | Description |
| :--- | :--- |
| **Landing Page** | Full hero section with UAV branding, call-to-actions, stats, and catalogs |
| **Chatbot Interface** | Conversational UI showing user queries, bot replies, chips, and clear option |
| **Services View** | Complete 6-card commercial drone services catalog with hover animations |
| **Courses View** | DGCA certified training programs catalog with duration & level badges |
| **Contact & Form** | Lead capture form with real-time validation error handling and direct details |
| **Admin Dashboard** | Real-time enquiry records with search bar, user type filter, status update, and delete |
| **Admin Login & Auth** | Secure authentication view with JWT credential verification |

*(High-resolution screenshots are stored in the  2_Screenshots/ submission folder)*

---

## 📦 10. Submission Package Structure (Google Drive)

As specified in the assignment distribution guidelines, the final submission folder FullStack_Chatbot_Task_FirstName_LastName contains:

`	ext
FullStack_Chatbot_Task_FirstName_LastName/
├── 01_Source_Code/         # Complete source code (Backend and Frontend)
├── 02_Screenshots/         # High-resolution screenshots of all UI screens & database
├── 03_API_Documentation/   # Complete REST API endpoint guide & sample requests
├── 04_Database/            # Schema definition, seed scripts & Atlas setup instructions
├── 05_Video_Walkthrough/   # 5–10 minute video walkthrough demonstrating all features
├── 06_GitHub/              # Text file containing GitHub repository URL
└── 07_Resume/              # Updated candidate resume in PDF format
`

---

## 🎬 11. Video Walkthrough Summary (5–10 Minutes)

The recorded video walkthrough covers:
1. **Architecture Overview:** Explanation of data flow (Frontend ➔ API ➔ Backend ➔ Database).
2. **Landing, Services & Courses:** Responsive UI showcase across mobile and desktop.
3. **Chatbot Demonstration:** Querying predefined questions, testing fallback on unknown queries, and resetting chat.
4. **Lead Submission:** Form submission, validation errors, and MongoDB record verification.
5. **Admin Dashboard:** Logging in with JWT, searching leads, filtering by Student/Customer, changing enquiry status, and deleting records.
6. **Error Handling & Security:** Demonstration of secure input handling and resilient API responses.

---

## ⚖️ 12. Evaluation Compliance Checklist

- [x] **React & TypeScript/JS:** Component-driven frontend with hooks (useState, useEffect, useCallback, useRef).
- [x] **Responsive Layout:** 100% responsive across desktop, tablet, and mobile via Tailwind CSS.
- [x] **REST API Layer:** Proper HTTP verbs (GET, POST, PUT, DELETE) with standard status codes.
- [x] **Database & CRUD:** Persistent storage in MongoDB Atlas with full create, read, update, delete support.
- [x] **Chatbot Functionality:** Predefined responses, session history, gracefully handled fallback, and reset feature.
- [x] **Validation & Error Handling:** Client & server validation with safe, user-friendly error alerts.
- [x] **Security Awareness:** Bcrypt password hashing, JWT stateless authentication, sanitization, and environment variables.
- [x] **Git Version Control:** Professional commit structure, clean repository, and comprehensive README documentation.

---

*Developed with passion for the **IPAGE Group Full Stack Developer Internship** practical assessment.*
