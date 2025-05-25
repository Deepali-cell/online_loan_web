"use client";
import { useUsers } from "../../context/userProvider";
import {
  FaUserAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaCity,
  FaMapMarkedAlt,
  FaGlobeAmericas,
  FaIdCardAlt,
  FaFileInvoice,
  FaCalendarAlt,
  FaFilePdf,
  FaExternalLinkAlt,
} from "react-icons/fa";

export default function ProfilePage() {
  const { userDetails } = useUsers();

  if (!userDetails) return <p className="p-4 text-center">Loading...</p>;

  return (
    <div className="w-full min-h-screen px-4 pt-24 sm:pt-20 md:pt-16 pb-8 sm:px-6 md:px-8">
      <div className="max-w-5xl mx-auto  rounded-2xl shadow-lg p-8 sm:p-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-10 text-center text-indigo-700 flex justify-center items-center gap-3">
          <FaUserAlt className="text-blue-600" /> My Profile Details
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <Detail
            icon={<FaUserAlt />}
            label="Full Name"
            value={userDetails.fullName}
          />
          <Detail
            icon={<FaEnvelope />}
            label="Email"
            value={userDetails.email}
          />
          <Detail
            icon={<FaPhoneAlt />}
            label="Phone"
            value={userDetails.phoneNumber}
          />
          <Detail icon={<FaCity />} label="City" value={userDetails.city} />
          <Detail
            icon={<FaMapMarkedAlt />}
            label="State"
            value={userDetails.state}
          />
          <Detail
            icon={<FaGlobeAmericas />}
            label="Country"
            value={userDetails.country}
          />
          <Detail
            icon={<FaIdCardAlt />}
            label="Aadhaar Number"
            value={userDetails.aadhaarNumber}
          />
          <Detail
            icon={<FaFileInvoice />}
            label="PAN Number"
            value={userDetails.panNumber}
          />
          <Detail
            icon={<FaCalendarAlt />}
            label="Created At"
            value={new Date(userDetails.createdAt).toLocaleString()}
          />
        </div>

        {/* Documents Section */}
        <div className="mt-14">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-indigo-700">
            <FaFilePdf className="text-red-600" /> Uploaded Documents
          </h2>
          {userDetails.documents?.length > 0 ? (
            <ul className="space-y-5">
              {userDetails.documents.map((doc) => (
                <li
                  key={doc.id}
                  className="flex items-center justify-between p-5 bg-gray-50 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <FaFilePdf className="text-red-600 text-3xl" />
                    <p className="font-semibold text-gray-800 text-lg">
                      {doc.name}
                    </p>
                  </div>
                  <a
                    href={`https://docs.google.com/gview?url=${encodeURIComponent(
                      doc.url
                    )}&embedded=true`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-900 transition"
                    aria-label={`View ${doc.name}`}
                  >
                    View PDF <FaExternalLinkAlt />
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 italic">
              No documents uploaded yet. Upload now to keep them safe!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function Detail({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4 bg-indigo-50 rounded-lg p-4 shadow-sm border border-indigo-300">
      <div className="text-blue-600 text-xl">{icon}</div>
      <div>
        <span className="block text-sm font-medium text-indigo-900">
          {label}
        </span>
        <span className="block text-lg font-semibold text-gray-800">
          {value || "-"}
        </span>
      </div>
    </div>
  );
}
