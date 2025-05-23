"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

export default function page() {
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

  const handleSubmit = async () => {
    try {
      const res = await axios.post("/api/signup", form);
      if (res.status === 200) {
        router.push("/login");
      } else {
        alert(res.data.message || "Signup failed");
      }
    } catch (err) {
      console.error("Signup error:", err);
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white flex items-center justify-center transition-colors">
      <div className="w-full max-w-md p-8 shadow-lg rounded-xl border border-black dark:border-white my-10 bg-white dark:bg-zinc-900 transition-colors">
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
        {Object.entries(form).map(([key, value]) => (
          <input
            key={key}
            placeholder={key.replace(/([A-Z])/g, " $1")}
            type={key === "password" ? "password" : "text"}
            value={value}
            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
            className="w-full mb-4 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-zinc-800 text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white"
          />
        ))}
        <button
          onClick={handleSubmit}
          className="w-full bg-black dark:bg-white text-white dark:text-black py-2 rounded hover:bg-gray-900 dark:hover:bg-gray-100 transition-colors"
        >
          Signup
        </button>

        <p className="mt-4 text-center text-sm">
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
