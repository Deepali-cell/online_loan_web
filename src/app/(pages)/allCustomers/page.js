"use client";

import { useUsers } from "../../context/userProvider";
import React from "react";

export default function UsersPage() {
  const { users, loading } = useUsers();

  if (loading) return <p className="p-4">Loading users...</p>;

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      <h1 className="text-2xl font-bold mb-6">All Customers</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
          <thead className="bg-gray-200 dark:bg-gray-800">
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Phone</th>
              <th className="border px-4 py-2">City</th>
              <th className="border px-4 py-2">Aadhaar</th>
              <th className="border px-4 py-2">PAN</th>
              <th className="border px-4 py-2">Created At</th>
              <th className="border px-4 py-2">Loan Applications</th>
              <th className="border px-4 py-2">Documents</th>
              {/* Added header for documents */}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="bg-white dark:bg-gray-800">
                <td className="border px-4 py-2">{user.fullName}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.phoneNumber}</td>
                <td className="border px-4 py-2">
                  {user.city}, {user.state}, {user.country}
                </td>
                <td className="border px-4 py-2">{user.aadhaarNumber}</td>
                <td className="border px-4 py-2">{user.panNumber}</td>
                <td className="border px-4 py-2">
                  {new Date(user.createdAt).toLocaleString()}
                </td>
                <td className="border px-4 py-2 text-sm">
                  {user.loanApplications.length > 0 ? (
                    <ul className="list-disc list-inside">
                      {user.loanApplications.map((loan) => (
                        <li key={loan.id}>
                          ₹{loan.loanAmount} - {loan.loanPurpose} ({loan.status}
                          )
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span className="text-gray-500 dark:text-gray-400">
                      No applications
                    </span>
                  )}
                </td>
                <td className="border px-4 py-2 text-sm">
                  {user.documents && user.documents.length > 0 ? (
                    <ul className="list-disc list-inside">
                      {user.documents.map((doc) => (
                        <li key={doc.id}>
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
                    <span className="text-gray-500 dark:text-gray-400">
                      No documents
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
