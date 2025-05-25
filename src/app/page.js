"use client";
import React from "react";
import { Button } from "../components/ui/button";
import { useRouter } from "next/navigation";
import { FaCheckCircle, FaClock, FaLock } from "react-icons/fa";

const Page = () => {
  const router = useRouter();
  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 pt-20 sm:pt-20 pb-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center transition-colors duration-300">
      {/* Hero Section */}
      <div className="w-full max-w-4xl text-center space-y-6">
        <h1 className="text-3xl text-blue-600 sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
          Apka Apna Loan – Fast, Easy & Reliable
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Chinta chhodo, paisa apke haath. <br />
          Jaldi approval, bina jhanjhat, <br />
          100% surakshit aur online apply karein.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Button
            onClick={() => router.push("UploadScreen")}
            className="px-6 py-3 text-base sm:text-lg bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white rounded-xl shadow-lg hover:brightness-110 transition"
          >
            Apply Now
          </Button>

          <Button
            onClick={() => router.push("checkEligiblity")}
            className="px-6 py-3 text-base sm:text-lg bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white rounded-xl shadow-lg hover:brightness-110 transition"
          >
            Check Eligibility
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16 w-full max-w-6xl px-4 sm:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              title: "⚡ Quick Approval",
              desc: "Apka loan turant approved, bina kisi delay ke.",
              icon: (
                <FaClock className="mx-auto text-yellow-500 text-4xl mb-3" />
              ),
            },
            {
              title: "💰 Low Interest",
              desc: "Asaan EMI plans, jisse aapko kabhi bojh na ho.",
              icon: (
                <FaCheckCircle className="mx-auto text-green-500 text-4xl mb-3" />
              ),
            },
            {
              title: "🔒 Fully Secure",
              desc: "Bank-grade security, apka data humesha safe rahe.",
              icon: <FaLock className="mx-auto text-blue-500 text-4xl mb-3" />,
            },
          ].map(({ title, desc, icon }) => (
            <div
              key={title}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {icon}
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
