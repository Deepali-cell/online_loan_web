"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";

export default function Page() {
  const router = useRouter();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    city: "",
    state: "",
    country: "",
    aadhaarNumber: "",
    panNumber: "",
  });

  const labels = {
    fullName: "👤 Full Name",
    email: "📧 Email",
    phoneNumber: "📱 Phone Number",
    password: "🔒 Password",
    city: "🏙️ City",
    state: "🗺️ State",
    country: "🌍 Country",
    aadhaarNumber: "🆔 Aadhaar Number",
    panNumber: "💳 PAN Number",
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("/api/signup", form);
      if (res.status === 200) {
        toast.success("🎉 Welcome to EasyLoan! You’re registered.");
        router.push("/login");
      } else {
        toast.error(res.data.message || "Signup failed");
      }
    } catch (err) {
      console.error("Signup error:", err);
      toast.error(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-yellow-100 to-yellow-50 dark:from-zinc-900 dark:to-zinc-800 flex items-center justify-center px-4 sm:px-6">
      <div className="w-full max-w-md p-8 shadow-2xl rounded-xl border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 transition-all mt-16 sm:mt-10 mb-10">
        {/* Header with Icon */}
        <div className="text-center mb-6">
          <div className="text-4xl mb-2">📝</div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Join EasyLoan Today
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Fast. Secure. Paperless. Start your financial journey now!
          </p>
        </div>

        {/* Input Fields */}
        {Object.entries(form).map(([key, value]) => (
          <div key={key} className="mb-4">
            <input
              placeholder={labels[key]}
              type={key === "password" ? "password" : "text"}
              value={value}
              onChange={(e) => setForm({ ...form, [key]: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-zinc-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-400"
            />
          </div>
        ))}

        <button
          onClick={handleSubmit}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded transition-colors"
        >
          Create Account
        </button>

        <p className="mt-6 text-center text-sm text-gray-700 dark:text-gray-300">
          Already have an account?{" "}
          <Link
            href="/login"
            className="underline text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
