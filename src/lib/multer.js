// lib/multer.js
import multer from "multer";

// Set memory storage
const storage = multer.memoryStorage();

// Accept only one file named "file"
const upload = multer({ storage });

export const uploadMiddleware = upload.single("file");

// Convert Multer to a Promise-based function for App Router (Edge not supported here)
export function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) return reject(result);
      return resolve(result);
    });
  });
}
