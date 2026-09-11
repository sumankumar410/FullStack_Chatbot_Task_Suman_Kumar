import { FiMail, FiPhone, FiCalendar, FiTrash2 } from "react-icons/fi";

export default function EnquiryCard({ enquiry, onStatusChange, onDelete }) {
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getUserTypeBadge = (userType) => {
    if (userType === "Student") {
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    }
    if (userType === "Customer") {
      return "bg-blue-50 text-blue-700 border-blue-200";
    }
    return "bg-gray-100 text-gray-700 border-gray-200";
  };

  const getStatusBadge = (status) => {
    if (status === "New") {
      return "bg-amber-50 text-amber-800 border-amber-300";
    }
    if (status === "Contacted") {
      return "bg-blue-50 text-blue-800 border-blue-300";
    }
    if (status === "In Progress") {
      return "bg-orange-50 text-orange-800 border-orange-300";
    }
    if (status === "Closed") {
      return "bg-emerald-50 text-emerald-800 border-emerald-300";
    }
    return "bg-gray-50 text-gray-800 border-gray-200";
  };

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete the enquiry from ${enquiry?.name}?`)) {
      onDelete(enquiry._id);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-gray-100 transition-all duration-200 flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h4 className="text-lg font-bold text-gray-900 leading-tight">
              {enquiry?.name}
            </h4>
            <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-1">
              <FiCalendar className="w-3.5 h-3.5" />
              <span>{formatDate(enquiry?.createdAt)}</span>
            </div>
          </div>
          <span
            className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${getUserTypeBadge(
              enquiry?.userType
            )}`}
          >
            {enquiry?.userType || "General"}
          </span>
        </div>

        <div className="space-y-1.5 my-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <FiMail className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <a href={`mailto:${enquiry?.email}`} className="hover:text-blue-600 transition-colors truncate">
              {enquiry?.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FiPhone className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <a href={`tel:${enquiry?.phone}`} className="hover:text-blue-600 transition-colors">
              {enquiry?.phone}
            </a>
          </div>
        </div>

        {enquiry?.interest && (
          <div className="mb-3 px-3 py-1.5 bg-gray-50 rounded-xl border border-gray-100">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Interest</p>
            <p className="text-sm font-semibold text-gray-800 truncate">{enquiry.interest}</p>
          </div>
        )}

        {enquiry?.message && (
          <div className="mb-4">
            <p className="text-xs font-medium text-gray-500 mb-1">Message:</p>
            <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed bg-gray-50/50 p-2.5 rounded-lg border border-gray-100">
              {enquiry.message}
            </p>
          </div>
        )}
      </div>

      <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
        <div className="flex-1">
          <select
            value={enquiry?.status || "New"}
            onChange={(e) => onStatusChange(enquiry._id, e.target.value)}
            className={`w-full text-xs font-semibold px-3 py-2 rounded-xl border outline-none cursor-pointer transition-colors ${getStatusBadge(
              enquiry?.status
            )}`}
          >
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="In Progress">In Progress</option>
            <option value="Closed">Closed</option>
          </select>
        </div>

        <button
          type="button"
          onClick={handleDelete}
          className="p-2 text-red-600 hover:text-white hover:bg-red-600 rounded-xl border border-red-200 hover:border-red-600 transition-colors"
          title="Delete enquiry"
        >
          <FiTrash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}