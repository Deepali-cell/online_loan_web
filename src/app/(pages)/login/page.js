"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

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
      router.push("/");
      router.refresh();
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white flex items-center justify-center transition-colors">
      <div className="w-full max-w-md p-8 shadow-lg rounded-xl border border-black dark:border-white bg-white dark:bg-zinc-900">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-zinc-800 text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white"
        />

        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-zinc-800 text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-black dark:bg-white text-white dark:text-black py-2 rounded hover:bg-gray-900 dark:hover:bg-gray-100 transition-colors"
        >
          Login
        </button>

        {/* Register link */}
        <p className="mt-4 text-center text-sm">
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
