import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Courses from "./pages/Courses/Courses";
import Chat from "./pages/Chat/Chat";
import Contact from "./pages/Contact/Contact";
import Admin from "./pages/Admin/Admin";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("dronetv_token");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 px-4 text-center">
      <span className="text-6xl mb-4">🚁</span>
      <h1 className="text-5xl font-extrabold text-gray-900 mb-2">404</h1>
      <h2 className="text-xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
      <p className="text-gray-500 text-sm max-w-sm mb-6">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}