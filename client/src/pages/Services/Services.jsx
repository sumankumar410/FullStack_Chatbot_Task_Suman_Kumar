import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { SERVICES_LIST } from "../../types/index";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Navbar />

      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            Commercial UAV Services
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mt-3">
            Our Services
          </h1>
          <div className="w-16 h-1 bg-blue-600 mx-auto my-4 rounded-full"></div>
          <p className="text-base sm:text-lg text-gray-600">
            Professional drone solutions for every industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 sm:p-10 border border-gray-100 shadow-sm text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Interested in a service? Contact us!
          </h3>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto mb-6">
            Looking for tailored aerial solutions, custom survey scopes, or project quotations? Get in touch with our team directly.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}