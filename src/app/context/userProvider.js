"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState(null);

  const { data: session, status } = useSession();

  // Fetch all users (for admin maybe)
  const fetchUsers = async () => {
    try {
      const res = await axios.get("/api/allUsers");
      setUsers(res.data);
    } catch (err) {
      console.error("Failed to fetch users", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserData = useCallback(async () => {
    if (session?.user?.id) {
      try {
        const res = await axios.get(`/api/user/${session.user.id}`);
        setUserDetails(res.data);
      } catch (error) {
        console.error("Failed to fetch user data", error);
      }
    }
  }, [session?.user?.id]);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <UserContext.Provider
      value={{
        users,
        loading,
        fetchUsers,
        userDetails,
        setUserDetails,
        fetchUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for easy access to context
export const useUsers = () => useContext(UserContext);
