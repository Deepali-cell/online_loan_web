"use client";

import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [file, setFile] = useState(null);
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      toast.error("Please select a PDF file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("userId", session?.user?.id);

    toast.loading("Uploading...");

    try {
      const res = await axios.post("/api/documents/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.dismiss(); // dismiss loading toast
      toast.success("Upload successful!");
      setFile(null);
      router.push("/profile");
    } catch (err) {
      toast.dismiss();
      toast.error(
        "Upload failed: " + (err.response?.data?.message || err.message)
      );
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="max-w-md mx-auto p-8 bg-white text-black rounded-lg shadow-lg mt-16 border border-gray-900">
        <h1 className="text-3xl font-bold mb-6 text-center">Upload PDF</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files[0])}
            className="block w-full text-black border border-gray-900 rounded-md cursor-pointer
              file:mr-4 file:py-2 file:px-4
              file:rounded file:border-0
              file:text-sm file:font-semibold
              file:bg-black file:text-white
              hover:file:bg-gray-800"
          />

          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-900 text-white font-semibold py-3 rounded-md transition"
          >
            Upload
          </button>
        </form>
      </div>
    </>
  );
}
