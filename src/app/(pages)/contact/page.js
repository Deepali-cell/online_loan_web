import React from "react";

export default function page() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white px-4 sm:px-6 flex flex-col justify-center">
      <div className="max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto space-y-10">
        <h1 className="pt-20 text-3xl sm:text-4xl font-extrabold mb-6 text-center text-indigo-700 dark:text-indigo-400 drop-shadow-md">
          Contact Loan Department
        </h1>

        <p className="text-center mb-10 text-base sm:text-lg text-gray-700 dark:text-gray-300">
          Have questions about our bank loans? Our support team is here to help
          you with any queries related to personal, business, or home loans.
        </p>

        <div
          className="bg-gray-50 dark:bg-gray-900 p-6 sm:p-10 rounded-3xl shadow-lg space-y-6 sm:space-y-8 border border-indigo-300 dark:border-indigo-700
          grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Phone Support */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <span className="text-2xl sm:text-3xl text-blue-600 dark:text-blue-400 animate-pulse">
              📞
            </span>
            <div>
              <p className="font-semibold text-indigo-700 dark:text-indigo-400 text-base sm:text-lg">
                Phone Support
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                +1 800-555-LOAN (Mon–Fri, 9AM–6PM)
              </p>
            </div>
          </div>

          {/* Email Support */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <span className="text-2xl sm:text-3xl text-blue-600 dark:text-blue-400 animate-pulse">
              📧
            </span>
            <div>
              <p className="font-semibold text-indigo-700 dark:text-indigo-400 text-base sm:text-lg">
                Email Support
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                loansupport@yourbank.com
              </p>
            </div>
          </div>

          {/* Office Address */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <span className="text-2xl sm:text-3xl text-blue-600 dark:text-blue-400 animate-pulse">
              🏢
            </span>
            <div>
              <p className="font-semibold text-indigo-700 dark:text-indigo-400 text-base sm:text-lg">
                Office Address
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                123 Bank Street, Finance City, 99999
              </p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <span className="text-2xl sm:text-3xl text-blue-600 dark:text-blue-400 animate-pulse">
              🕘
            </span>
            <div>
              <p className="font-semibold text-indigo-700 dark:text-indigo-400 text-base sm:text-lg">
                Working Hours
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                Monday to Friday – 9:00 AM to 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
