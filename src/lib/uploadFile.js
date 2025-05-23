// lib/uploadFile.js
import { v2 as cloudinary } from "cloudinary";
import path from "path";

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Upload file buffer
export async function uploadFileToCloudinary(buffer, filename) {
  return new Promise((resolve, reject) => {
    const nameWithoutExt = path.parse(filename).name;

    const stream = cloudinary.uploader.upload_stream(
      {
        resource_type: "raw", // IMPORTANT for PDFs
        public_id: `documents/${nameWithoutExt}`,
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );

    stream.end(buffer);
  });
}
