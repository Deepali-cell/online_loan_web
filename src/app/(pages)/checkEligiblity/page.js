"use client";

import React from "react";
import Link from "next/link";
import {
  FaUserCheck,
  FaRupeeSign,
  FaIdCard,
  FaFlag,
  FaExclamationTriangle,
} from "react-icons/fa";

const LoanEligibilityPage = () => {
  const steps = [
    {
      icon: <FaUserCheck className="text-blue-600 text-3xl" />,
      title: "Age between 21 to 60",
      description: "Your age should be from 21 to 60 years.",
    },
    {
      icon: <FaRupeeSign className="text-green-600 text-3xl" />,
      title: "Stable Income",
      description: "You must have a steady source of income.",
    },
    {
      icon: <FaFlag className="text-red-600 text-3xl" />,
      title: "Indian Citizen",
      description: "You should be an Indian citizen.",
    },
    {
      icon: <FaIdCard className="text-yellow-600 text-3xl" />,
      title: "Valid Aadhaar & PAN",
      description: "You need valid Aadhaar and PAN cards.",
    },
    {
      icon: <FaExclamationTriangle className="text-orange-600 text-3xl" />,
      title: "No Major Loan Defaults",
      description: "You should not have big unpaid loans.",
    },
  ];

  return (
    <div className="min-h-screen flex items-start sm:items-center justify-center pt-20 sm:pt-10 px-4 py-6">
      <div className="max-w-xl w-full rounded-3xl shadow-lg p-10">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-700 dark:text-blue-400">
          Loan Eligibility Criteria
        </h1>

        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-1">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-center gap-5 bg-blue-50 dark:bg-gray-700 p-5 rounded-lg border border-blue-200 dark:border-gray-600"
            >
              <div className="flex flex-col items-center justify-center w-12 h-12 bg-blue-600 dark:bg-blue-500 text-white font-bold rounded-full text-xl">
                {index + 1}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  {step.icon}
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <hr className="my-8 border-gray-300 dark:border-gray-700" />

        <div className="text-center">
          <p className="text-md mb-3 text-gray-700 dark:text-gray-300">
            For personalized eligibility &amp; more help:
          </p>
          <Link href="/contact">
            <button className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold px-8 py-3 rounded-full shadow-md transition duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoanEligibilityPage;
