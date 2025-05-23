"use client";
import React from "react";
import { Button } from "../components/ui/button";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8 flex flex-col items-center justify-center transition-colors duration-300">
      <div className="max-w-4xl text-center space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">
          Bank Loans Made Easy
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Instant approval. No paperwork. 100% secure. Apply online today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Button
            onClick={() => router.push("UploadScreen")}
            className="px-8 py-4 text-lg bg-black text-white rounded-xl hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors duration-300"
          >
            Apply Now
          </Button>

          <Button
            onClick={() => router.push("checkEligiblity")}
            className="px-8 py-4 text-lg bg-black text-white rounded-xl hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors duration-300"
          >
            Check Eligibility
          </Button>
        </div>
      </div>

      <div className="mt-16 w-full max-w-5xl">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Quick Approval",
              desc: "Get your loan approved within minutes.",
            },
            {
              title: "Low Interest",
              desc: "Flexible EMIs at minimal interest.",
            },
            {
              title: "Fully Secure",
              desc: "Bank-grade encryption & data safety.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
