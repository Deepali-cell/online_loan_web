"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";

export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.ok) {
      toast.success("You are logged in successfully!");
      router.push("/");
      router.refresh();
    } else {
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-yellow-50 dark:from-zinc-900 dark:to-zinc-800 flex items-center justify-center px-4 sm:px-6">
      <div className="w-full max-w-md p-8 shadow-2xl rounded-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 transition-all">
        {/* Header with Icon */}
        <div className="text-center mb-6">
          <div className="text-4xl mb-2">💰</div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Get Instant Loans Online
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Secure, fast and paperless. Login to explore your loan options
            today!
          </p>
        </div>

        {/* Login Form */}
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-zinc-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-400"
        />

        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-zinc-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-400"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded transition-colors"
        >
          Login to Your Account
        </button>

        {/* Register Link */}
        <p className="mt-6 text-center text-sm text-gray-700 dark:text-gray-300">
          Don&apos;t have an account?{" "}
          <Link
            href="/signUp"
            className="underline text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
