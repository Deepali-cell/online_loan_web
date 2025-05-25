"use client";

import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaFilePdf, FaCloudUploadAlt } from "react-icons/fa";

export default function Page() {
  const [file, setFile] = useState(null);
  const { data: session } = useSession();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      toast.error("Kripya pehle ek PDF file select karein.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("userId", session?.user?.id);

    toast.loading("Uploading your file, please wait...");

    try {
      const res = await axios.post("/api/documents/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.dismiss();
      toast.success("File upload ho gaya! Shukriya 🙌");
      setFile(null);
      router.push("/profile");
    } catch (err) {
      toast.dismiss();
      toast.error(
        "Upload mein problem aayi: " +
          (err.response?.data?.message || err.message)
      );
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="w-full min-h-screen flex justify-center items-center px-4 ">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-white rounded-2xl shadow-2xl p-8 sm:p-12 border border-indigo-300">
          <div className="flex flex-col items-center mb-8">
            <FaCloudUploadAlt className="text-blue-600 text-6xl mb-4 animate-bounce" />
            <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-indigo-700">
              Apni PDF File Upload Karein
            </h1>
            <p className="mt-2 text-indigo-700 text-center max-w-md">
              Apna important document yahan upload karein. <br />
              Humari team uska khayal rakhegi, 100% suraksha ke saath.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <label
              htmlFor="file-upload"
              className="flex items-center justify-center cursor-pointer border-2 border-dashed border-indigo-300 rounded-lg py-6 text-indigo-700 hover:bg-indigo-50 transition"
            >
              {file ? (
                <span className="flex items-center gap-3 text-lg font-semibold text-indigo-700">
                  <FaFilePdf className="text-blue-600 text-2xl" /> {file.name}
                </span>
              ) : (
                <span className="flex items-center gap-3 text-lg font-semibold text-indigo-700">
                  <FaFilePdf className="text-blue-600 text-2xl" /> Select a PDF
                  File
                </span>
              )}
              <input
                id="file-upload"
                type="file"
                accept="application/pdf"
                onChange={(e) => setFile(e.target.files[0])}
                className="hidden"
              />
            </label>

            <button
              type="submit"
              className="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-3 rounded-lg shadow-lg transition"
            >
              Upload Karein
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
