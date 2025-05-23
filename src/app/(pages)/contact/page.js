// app/contact/page.tsx

import React from "react";

export default function page() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Contact Loan Department
        </h1>

        <p className="text-center mb-10 text-lg">
          Have questions about our bank loans? Our support team is here to help
          you with any queries related to personal, business, or home loans.
        </p>

        <div className="bg-gray-100 dark:bg-gray-900 p-8 rounded-2xl shadow-xl space-y-6">
          <div className="flex items-center space-x-4">
            <span className="text-2xl">📞</span>
            <div>
              <p className="font-semibold">Phone Support</p>
              <p>+1 800-555-LOAN (Mon–Fri, 9AM–6PM)</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-2xl">📧</span>
            <div>
              <p className="font-semibold">Email Support</p>
              <p>loansupport@yourbank.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-2xl">🏢</span>
            <div>
              <p className="font-semibold">Office Address</p>
              <p>123 Bank Street, Finance City, 99999</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-2xl">🕘</span>
            <div>
              <p className="font-semibold">Working Hours</p>
              <p>Monday to Friday – 9:00 AM to 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
