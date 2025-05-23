import React from "react";
import Link from "next/link";

const LoanEligibilityPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Loan Eligibility Criteria
        </h1>

        <p className="text-lg mb-6 text-center">
          To apply for a loan, please ensure you meet the following basic
          criteria:
        </p>

        <ul className="list-disc list-inside space-y-3 text-lg">
          <li>Age should be between 21 to 60 years</li>
          <li>Should have a stable source of income</li>
          <li>Must be an Indian citizen</li>
          <li>Should have valid Aadhaar and PAN card</li>
          <li>Should not have any major loan defaults</li>
        </ul>

        <div className="mt-8 text-center">
          <p className="text-md">
            For further details and personalized eligibility:
          </p>
          <Link href="/contact">
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoanEligibilityPage;
