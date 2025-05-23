"use client";
import React from "react";
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
} from "react-icons/fa";
import { ModeToggle } from "./Mode";
import { useUsers } from "../app/context/userProvider";
import { signOut } from "next-auth/react";

const Navbar = () => {
  const pathname = usePathname();
  const { userDetails } = useUsers();

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
    <nav className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href={"/"}>
          <h1 className="text-2xl font-bold tracking-wide">BankLoanPro</h1>
        </Link>
        <ul className="flex items-center gap-5">
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
      </div>
    </nav>
  );
};

export default Navbar;
