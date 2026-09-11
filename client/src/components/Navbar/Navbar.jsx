import { useState, useEffect } from "react";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("dronetv_token");
    setIsAuthenticated(!!token);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Courses", path: "/courses" },
    { name: "Chat", path: "/chat" },
    { name: "Contact", path: "/contact" },
    { name: "Admin", path: "/admin" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("dronetv_token");
    localStorage.removeItem("dronetv_user");
    setIsAuthenticated(false);
    navigate("/login");
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#1e3a5f] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" onClick={closeMenu} className="flex items-center gap-2 text-xl font-bold tracking-wide">
            <span>🚁</span>
            <span className="text-white hover:text-blue-300 transition-colors">DroneTV</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium transition-colors duration-200 border-b-2 ${
                    isActive
                      ? "text-blue-400 border-blue-400"
                      : "text-gray-200 border-transparent hover:text-white hover:border-gray-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="px-4 py-1.5 text-xs font-semibold text-white bg-red-500/80 hover:bg-red-600 rounded-lg transition-colors"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="px-4 py-1.5 text-xs font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
              >
                Login
              </Link>
            )}
          </div>
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-200 hover:text-white hover:bg-[#162c47] focus:outline-none"
              aria-label="Toggle navigation"
            >
              {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-[#162c47] px-4 py-2 space-y-1`}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            onClick={closeMenu}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                isActive
                  ? "bg-[#1e3a5f] text-blue-400 border-l-4 border-blue-400"
                  : "text-gray-200 hover:bg-[#1e3a5f] hover:text-white"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
        <div className="pt-2 border-t border-gray-700">
          {isAuthenticated ? (
            <button
              onClick={() => {
                closeMenu();
                handleLogout();
              }}
              className="w-full text-left px-3 py-2 text-sm text-red-400 hover:text-red-300"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              onClick={closeMenu}
              className="block px-3 py-2 text-sm text-blue-300 hover:text-white"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}