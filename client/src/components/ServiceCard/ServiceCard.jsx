import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  return (
    <div className="w-full bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100">
      <div className="flex flex-col items-center text-center">
        {service?.icon && (
          <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-3xl mb-4 shadow-inner">
            {service.icon}
          </div>
        )}
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          {service?.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {service?.description}
        </p>
      </div>
      <div className="mt-6 pt-4 border-t border-gray-100 flex justify-center">
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-blue-600 hover:text-white bg-blue-50 hover:bg-blue-600 rounded-xl transition-colors duration-200 w-full text-center"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}