import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <div className="w-full bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-gray-100">
      <div>
        <div className="flex items-center justify-between mb-4">
          {course?.icon ? (
            <span className="text-3xl p-3 bg-blue-50 rounded-2xl shadow-inner">
              {course.icon}
            </span>
          ) : (
            <div className="w-10 h-10 rounded-xl bg-blue-50" />
          )}
          <div className="flex flex-wrap gap-1.5 justify-end">
            {course?.duration && (
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">
                {course.duration}
              </span>
            )}
            {course?.level && (
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
                {course.level}
              </span>
            )}
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug">
          {course?.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
          {course?.description}
        </p>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100">
        <Link
          to="/contact"
          className="inline-flex items-center justify-center w-full px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm hover:shadow transition-all duration-200 text-center"
        >
          Enquire Now
        </Link>
      </div>
    </div>
  );
}