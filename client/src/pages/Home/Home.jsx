import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import CourseCard from "../../components/CourseCard/CourseCard";
import { SERVICES_LIST, COURSES_LIST } from "../../types/index";

export default function Home() {
  const featuredServices = SERVICES_LIST.slice(0, 3);
  const featuredCourses = COURSES_LIST.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Navbar />

      <section className="min-h-[88vh] flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f172a] text-white px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/20 text-blue-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 border border-blue-400/30 backdrop-blur-sm">
            Next-Gen UAV Solutions
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-4">
            Welcome to <span className="text-blue-400">DroneTV</span>
          </h1>
          <h2 className="text-xl sm:text-2xl font-medium text-gray-300 mb-6 max-w-3xl mx-auto">
            India's Leading Drone Services & Training Platform
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Empowering industries with precision aerial inspections, mapping surveys, and high-end cinematography, alongside government-certified drone pilot training.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              to="/services"
              className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-200"
            >
              Explore Services
            </Link>
            <Link
              to="/chat"
              className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>Chat with AI Assistant</span>
              <span>🤖</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About DroneTV</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto my-4 rounded-full"></div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              DroneTV is a pioneer in unmanned aerial vehicle technologies, delivering end-to-end aerial data solutions, specialized training curricula, and enterprise consultancy across pan-India projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <p className="text-4xl sm:text-5xl font-extrabold text-blue-600 mb-2">500+</p>
              <p className="text-base font-semibold text-gray-900">Pilots Trained</p>
              <p className="text-xs text-gray-500 mt-1">Certified through DGCA compliant programs</p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <p className="text-4xl sm:text-5xl font-extrabold text-blue-600 mb-2">100+</p>
              <p className="text-base font-semibold text-gray-900">Commercial Projects</p>
              <p className="text-xs text-gray-500 mt-1">Delivered across agriculture, mining & media</p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <p className="text-4xl sm:text-5xl font-extrabold text-blue-600 mb-2">50+</p>
              <p className="text-base font-semibold text-gray-900">Enterprise Clients</p>
              <p className="text-xs text-gray-500 mt-1">Trusted by top corporations nationwide</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">What We Deliver</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-1 sm:text-4xl">Our Services</h2>
            </div>
            <Link
              to="/services"
              className="mt-4 md:mt-0 text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              <span>View All Services</span>
              <span>&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link
              to="/services"
              className="inline-block px-6 py-3 text-sm font-semibold text-blue-600 bg-white border border-gray-200 rounded-xl shadow-sm"
            >
              View All Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Career & Certification</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-1 sm:text-4xl">Training Programs</h2>
            </div>
            <Link
              to="/courses"
              className="mt-4 md:mt-0 text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              <span>View All Courses</span>
              <span>&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link
              to="/courses"
              className="inline-block px-6 py-3 text-sm font-semibold text-blue-600 bg-white border border-gray-200 rounded-xl shadow-sm"
            >
              View All Courses &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Have Questions? Ask Our AI Assistant
          </h2>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto mb-8">
            Get immediate answers about our drone fleet, course curriculum, certification prerequisites, and custom quotations.
          </p>
          <Link
            to="/chat"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-blue-900 bg-white hover:bg-blue-50 rounded-xl shadow-lg transition-all duration-200"
          >
            <span>Start Chat Now</span>
            <span>💬</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}