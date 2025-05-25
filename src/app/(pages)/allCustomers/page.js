"use client";

import React from "react";
import { useUsers } from "../../context/userProvider";

export default function UsersPage() {
  const { users, loading } = useUsers();

  if (loading) return <p className="p-4">Loading users...</p>;

  return (
    <div className="p-4 sm:pt-26 sm:p-6 pt-20 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      <h1 className="text-2xl sm:text-3xl font-extrabold mb-6 text-indigo-700 dark:text-indigo-400">
        All Customers
      </h1>

      <div className="w-full overflow-x-auto rounded-lg border border-gray-300 dark:border-gray-700 shadow-sm">
        <table className="min-w-[800px] w-full text-sm sm:text-base border-collapse">
          <thead className="bg-indigo-100 dark:bg-indigo-900 sticky top-0 z-10">
            <tr className="border-b border-indigo-300 dark:border-indigo-700">
              {[
                { label: "Name", icon: "👤" },
                { label: "Email", icon: "📧" },
                { label: "Phone", icon: "📞" },
                { label: "City", icon: "🏙️" },
                { label: "Aadhaar", icon: "🆔" },
                { label: "PAN", icon: "📝" },
                { label: "Created At", icon: "📅" },
                { label: "Loan Applications", icon: "💰" },
                { label: "Documents", icon: "📄" },
              ].map(({ label, icon }) => (
                <th
                  key={label}
                  className="border-l border-indigo-300 dark:border-indigo-700 px-3 sm:px-4 py-2 text-left text-xs sm:text-sm font-semibold text-indigo-800 dark:text-indigo-300 select-none"
                  title={label}
                >
                  <span className="mr-1">{icon}</span> {label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {users.map((user, idx) => (
              <tr
                key={user.id}
                className={`${
                  idx % 2 === 0
                    ? "bg-white dark:bg-gray-800"
                    : "bg-indigo-50 dark:bg-indigo-950"
                } hover:bg-indigo-100 dark:hover:bg-indigo-700 transition-colors`}
              >
                <td className="border-l border-indigo-300 dark:border-indigo-700 px-3 sm:px-4 py-2 font-medium">
                  {user.fullName}
                </td>
                <td className="border-l border-indigo-300 dark:border-indigo-700 px-3 sm:px-4 py-2 lowercase">
                  {user.email}
                </td>
                <td className="border-l border-indigo-300 dark:border-indigo-700 px-3 sm:px-4 py-2">
                  {user.phoneNumber}
                </td>
                <td className="border-l border-indigo-300 dark:border-indigo-700 px-3 sm:px-4 py-2">
                  {user.city}, {user.state}, {user.country}
                </td>
                <td className="border-l border-indigo-300 dark:border-indigo-700 px-3 sm:px-4 py-2 font-mono tracking-wide">
                  {user.aadhaarNumber}
                </td>
                <td className="border-l border-indigo-300 dark:border-indigo-700 px-3 sm:px-4 py-2 font-mono tracking-wide">
                  {user.panNumber}
                </td>
                <td className="border-l border-indigo-300 dark:border-indigo-700 px-3 sm:px-4 py-2 whitespace-nowrap">
                  {new Date(user.createdAt).toLocaleString()}
                </td>
                <td className="border-l border-indigo-300 dark:border-indigo-700 px-3 sm:px-4 py-2 text-xs sm:text-sm max-w-[200px]">
                  {user.loanApplications.length > 0 ? (
                    <ul className="list-disc list-inside space-y-1 max-h-32 overflow-y-auto pr-2">
                      {user.loanApplications.map((loan) => (
                        <li key={loan.id}>
                          ₹{loan.loanAmount} - {loan.loanPurpose} (
                          <span
                            className={`font-semibold ${
                              loan.status === "approved"
                                ? "text-green-600 dark:text-green-400"
                                : loan.status === "pending"
                                ? "text-yellow-600 dark:text-yellow-400"
                                : "text-red-600 dark:text-red-400"
                            }`}
                          >
                            {loan.status}
                          </span>
                          )
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span className="text-gray-500 dark:text-gray-400 italic">
                      No applications
                    </span>
                  )}
                </td>
                <td className="border-l border-indigo-300 dark:border-indigo-700 px-3 sm:px-4 py-2 text-xs sm:text-sm max-w-[150px]">
                  {user.documents && user.documents.length > 0 ? (
                    <ul className="list-disc list-inside space-y-1">
                      {user.documents.map((doc) => (
                        <li key={doc.id}>
                          <a
                            href={`https://docs.google.com/gview?url=${encodeURIComponent(
                              doc.url
                            )}&embedded=true`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline dark:text-blue-400"
                          >
                            View PDF
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span className="text-gray-500 dark:text-gray-400 italic">
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
