import { useState, useEffect, useCallback } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import EnquiryCard from "../../components/EnquiryCard/EnquiryCard";
import { getAllEnquiries, updateEnquiry, deleteEnquiry } from "../../services/api";
import { FiSearch, FiRefreshCw, FiAlertCircle, FiCheckCircle } from "react-icons/fi";

export default function Admin() {
  const [enquiries, setEnquiries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterUserType, setFilterUserType] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [notification, setNotification] = useState(null);

  const showToast = (type, message) => {
    setNotification({ type, message });
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  const fetchEnquiries = useCallback(async () => {
    setIsLoading(true);
    setFetchError("");
    try {
      const params = {};
      if (searchTerm.trim()) params.search = searchTerm.trim();
      if (filterUserType) params.userType = filterUserType;
      if (filterStatus) params.status = filterStatus;

      const response = await getAllEnquiries(params);
      setEnquiries(response?.data || []);
    } catch (err) {
      setFetchError(err.message || "Failed to load enquiries. Please check backend connection.");
    } finally {
      setIsLoading(false);
    }
  }, [searchTerm, filterUserType, filterStatus]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchEnquiries();
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [fetchEnquiries]);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateEnquiry(id, { status: newStatus });
      setEnquiries((prev) =>
        prev.map((item) =>
          item._id === id ? { ...item, status: newStatus } : item
        )
      );
      showToast("success", `Status updated to "${newStatus}" successfully.`);
    } catch (err) {
      showToast("error", err.message || "Failed to update enquiry status.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteEnquiry(id);
      setEnquiries((prev) => prev.filter((item) => item._id !== id));
      showToast("success", "Enquiry deleted successfully.");
    } catch (err) {
      showToast("error", err.message || "Failed to delete enquiry.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Navbar />

      <main className="flex-grow py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Admin Dashboard
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Manage client queries, student applications, and lead lifecycle
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-bold rounded-xl border border-blue-100">
              Total Enquiries: {enquiries.length}
            </span>
            <button
              onClick={fetchEnquiries}
              className="p-2.5 bg-white border border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-300 rounded-xl transition-colors shadow-sm"
              title="Refresh list"
            >
              <FiRefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
            </button>
          </div>
        </div>

        {notification && (
          <div
            className={`mb-6 p-4 rounded-xl text-sm flex items-center gap-3 border shadow-sm transition-all ${
              notification.type === "success"
                ? "bg-green-50 text-green-800 border-green-200"
                : "bg-red-50 text-red-800 border-red-200"
            }`}
          >
            {notification.type === "success" ? (
              <FiCheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
            ) : (
              <FiAlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
            )}
            <span className="font-medium">{notification.message}</span>
          </div>
        )}

        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-100 shadow-sm mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3">
            <div className="lg:col-span-6 relative">
              <FiSearch className="absolute left-3.5 top-3.5 text-gray-400 w-4 h-4" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name, email, or message..."
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            <div className="lg:col-span-3">
              <select
                value={filterUserType}
                onChange={(e) => setFilterUserType(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              >
                <option value="">All User Types</option>
                <option value="Student">Student</option>
                <option value="Customer">Customer</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="lg:col-span-3">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              >
                <option value="">All Statuses</option>
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="In Progress">In Progress</option>
                <option value="Closed">Closed</option>
              </select>
            </div>
          </div>
        </div>

        {fetchError && (
          <div className="p-6 bg-red-50 border border-red-200 rounded-2xl text-center mb-8">
            <FiAlertCircle className="w-8 h-8 text-red-500 mx-auto mb-2" />
            <p className="text-sm font-semibold text-red-800 mb-4">{fetchError}</p>
            <button
              onClick={fetchEnquiries}
              className="px-5 py-2 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 rounded-xl shadow-sm"
            >
              Retry Connection
            </button>
          </div>
        )}

        {isLoading ? (
          <div className="py-20 flex flex-col items-center justify-center text-gray-500">
            <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-3"></div>
            <p className="text-sm">Loading enquiries...</p>
          </div>
        ) : enquiries.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 border border-gray-100 text-center max-w-md mx-auto my-8">
            <span className="text-4xl mb-3 block">📋</span>
            <h3 className="text-lg font-bold text-gray-800">No Enquiries Found</h3>
            <p className="text-sm text-gray-500 mt-1 mb-6">
              {searchTerm || filterUserType || filterStatus
                ? "No records match your search and filter criteria."
                : "No customer or student leads have been submitted yet."}
            </p>
            {(searchTerm || filterUserType || filterStatus) && (
              <button
                onClick={() => {
                  setSearchTerm("");
                  setFilterUserType("");
                  setFilterStatus("");
                }}
                className="px-4 py-2 text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-xl"
              >
                Clear All Filters
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {enquiries.map((enquiry) => (
              <EnquiryCard
                key={enquiry._id}
                enquiry={enquiry}
                onStatusChange={handleStatusChange}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}