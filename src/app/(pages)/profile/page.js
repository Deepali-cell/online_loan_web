"use client";
import { useUsers } from "../../context/userProvider";

export default function ProfilePage() {
  const { userDetails } = useUsers();

  if (!userDetails) return <p className="p-4">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border">
      <h1 className="text-3xl font-bold mb-6 text-center">
        👤 Profile Details
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Detail label="Full Name" value={userDetails.fullName} />
        <Detail label="Email" value={userDetails.email} />
        <Detail label="Phone" value={userDetails.phoneNumber} />
        <Detail label="City" value={userDetails.city} />
        <Detail label="State" value={userDetails.state} />
        <Detail label="Country" value={userDetails.country} />
        <Detail label="Aadhaar Number" value={userDetails.aadhaarNumber} />
        <Detail label="PAN Number" value={userDetails.panNumber} />
        <Detail
          label="Created At"
          value={new Date(userDetails.createdAt).toLocaleString()}
        />
      </div>

      {/* Documents Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">📄 Uploaded Documents</h2>
        {userDetails.documents?.length > 0 ? (
          <ul className="space-y-4">
            {userDetails.documents.map((doc) => (
              <li key={doc.id} className="border p-3 rounded shadow-sm">
                <p className="font-medium">{doc.name}</p>
                <a
                  href={`https://docs.google.com/gview?url=${encodeURIComponent(
                    doc.url
                  )}&embedded=true`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View PDF
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No documents uploaded.</p>
        )}
      </div>
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div className="flex flex-col">
      <span className="text-gray-500 font-medium">{label}</span>
      <span className="text-lg font-semibold text-gray-800">{value}</span>
    </div>
  );
}
