import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import EnquiryForm from "../../components/EnquiryForm/EnquiryForm";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Navbar />

      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mt-3">
            Contact Us
          </h1>
          <div className="w-16 h-1 bg-blue-600 mx-auto my-4 rounded-full"></div>
          <p className="text-base sm:text-lg text-gray-600">
            We would love to hear from you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 w-full">
            <EnquiryForm />
          </div>

          <div className="lg:col-span-5 w-full space-y-6">
            <div className="bg-[#1e3a5f] text-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Direct Support</h3>
              <p className="text-blue-200 text-sm mb-6 leading-relaxed">
                Have questions regarding commercial contracts or DGCA courses? Reach our dedicated support team directly.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-white/10 rounded-xl text-blue-300 flex-shrink-0">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-200 uppercase font-semibold">Email Us</p>
                    <a href="mailto:info@dronetv.in" className="text-sm font-medium hover:text-blue-300 transition-colors">
                      info@dronetv.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-white/10 rounded-xl text-blue-300 flex-shrink-0">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-200 uppercase font-semibold">Call Us</p>
                    <a href="tel:+919876543210" className="text-sm font-medium hover:text-blue-300 transition-colors">
                      +91-9876543210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-white/10 rounded-xl text-blue-300 flex-shrink-0">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-200 uppercase font-semibold">Our Office</p>
                    <p className="text-sm font-medium">
                      DroneTV Corporate Campus, Sector 62, Noida, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-white/10 rounded-xl text-blue-300 flex-shrink-0">
                    <FiClock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-200 uppercase font-semibold">Working Hours</p>
                    <p className="text-sm font-medium">
                      Mon - Sat: 9:00 AM - 6:00 PM IST
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-xs text-blue-200 uppercase font-semibold mb-3">Connect On Social</p>
                <div className="flex space-x-3">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
                    <FaFacebookF className="w-3.5 h-3.5" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
                    <FaTwitter className="w-3.5 h-3.5" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
                    <FaInstagram className="w-3.5 h-3.5" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
                    <FaLinkedinIn className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                <FiMapPin className="text-blue-600" />
                <span>Flight Operations Center</span>
              </h4>
              <div className="w-full h-44 bg-gray-100 rounded-xl flex flex-col items-center justify-center text-gray-400 border border-dashed border-gray-300 text-center p-4">
                <span className="text-3xl mb-1">🗺️</span>
                <p className="text-xs font-semibold text-gray-600">DroneTV Training Ground</p>
                <p className="text-[11px] text-gray-400">DGCA Authorized Flying Field, Noida</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}