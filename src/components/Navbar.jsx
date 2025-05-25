"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaHome,
  FaUser,
  FaMoneyCheckAlt,
  FaPhone,
  FaSignInAlt,
  FaSignOutAlt,
  FaUsers,
  FaPiggyBank,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { ModeToggle } from "./Mode";
import { useUsers } from "../app/context/userProvider";
import { signOut } from "next-auth/react";

const Navbar = () => {
  const pathname = usePathname();
  const { userDetails } = useUsers();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  const navItems = [
    { name: "Home", icon: <FaHome />, path: "/" },
    { name: "Apply", icon: <FaMoneyCheckAlt />, path: "/UploadScreen" },
    { name: "Profile", icon: <FaUser />, path: "/profile" },
    { name: "Contact", icon: <FaPhone />, path: "/contact" },
  ];

  if (userDetails?.admin) {
    navItems.push({
      name: "All Customers",
      icon: <FaUsers />,
      path: "/allCustomers",
    });
  }

  return (
    <nav className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-md fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <FaPiggyBank className="text-blue-600 dark:text-blue-400 text-3xl" />
          <h1
            className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-blue-600 to-cyan-400 dark:from-blue-400 dark:to-cyan-300
              bg-clip-text text-transparent cursor-pointer select-none"
          >
            EasyLoan
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-5">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className={`flex items-center gap-2 px-4 py-2 rounded transition duration-200 ${
                  pathname === item.path
                    ? "bg-black text-white font-semibold shadow-md"
                    : "hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}

          {userDetails ? (
            <li>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition"
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </li>
          ) : (
            <li>
              <Link
                href="/login"
                className={`flex items-center gap-2 px-4 py-2 rounded transition duration-200 ${
                  pathname === "/login"
                    ? "bg-black text-white font-semibold shadow-md"
                    : "hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white"
                }`}
              >
                <FaSignInAlt />
                <span>Login</span>
              </Link>
            </li>
          )}

          <li>
            <ModeToggle />
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-md">
          <ul className="flex flex-col px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2 px-4 py-2 rounded transition duration-200 ${
                    pathname === item.path
                      ? "bg-black text-white font-semibold shadow-md"
                      : "hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white"
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}

            {userDetails ? (
              <li>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleLogout();
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition w-full"
                >
                  <FaSignOutAlt />
                  <span>Logout</span>
                </button>
              </li>
            ) : (
              <li>
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2 px-4 py-2 rounded transition duration-200 ${
                    pathname === "/login"
                      ? "bg-black text-white font-semibold shadow-md"
                      : "hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white"
                  }`}
                >
                  <FaSignInAlt />
                  <span>Login</span>
                </Link>
              </li>
            )}

            <li>
              <ModeToggle />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
