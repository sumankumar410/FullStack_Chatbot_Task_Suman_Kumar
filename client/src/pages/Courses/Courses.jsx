import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CourseCard from "../../components/CourseCard/CourseCard";
import { COURSES_LIST } from "../../types/index";

export default function Courses() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Navbar />

      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
            DGCA & Professional Programs
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mt-3">
            Training Programs
          </h1>
          <div className="w-16 h-1 bg-emerald-600 mx-auto my-4 rounded-full"></div>
          <p className="text-base sm:text-lg text-gray-600">
            Become a certified drone professional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES_LIST.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 sm:p-10 border border-gray-100 shadow-sm text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Ready to enroll? Fill our enquiry form!
          </h3>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto mb-6">
            Take your first step towards becoming a licensed drone pilot or UAV technical specialist with real flight simulator practice and field training.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
          >
            Enroll Now
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}