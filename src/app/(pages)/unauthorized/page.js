"use client";
import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

const UnauthorizedPage = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-4xl font-bold mb-4">Access Denied</h1>
      <p className="mb-6 text-center text-lg max-w-md">
        You need to be logged in to access this page.
      </p>
      <div className="flex gap-4">
        <Link
          href="/login"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="bg-gray-700 hover:bg-gray-800 text-white px-5 py-2 rounded"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
