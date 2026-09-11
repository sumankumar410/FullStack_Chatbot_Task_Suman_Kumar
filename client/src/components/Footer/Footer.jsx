import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-gray-800">
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold text-white mb-4">
              <span>🚁</span>
              <span>DroneTV</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              India's leading platform for commercial drone services, aerial cinematography, and DGCA certified pilot training programs.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-sky-500 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-600 transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white text-base font-semibold tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-base font-semibold tracking-wider uppercase mb-4">
              Contact Info
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: info@dronetv.in</li>
              <li>Phone: +91-9876543210</li>
              <li>Address: DroneTV Headquarters, New Delhi, India</li>
              <li>Hours: Monday - Saturday: 9:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>
        <div className="pt-6 text-center text-sm text-gray-500">
          <p>&copy; 2025 DroneTV. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
