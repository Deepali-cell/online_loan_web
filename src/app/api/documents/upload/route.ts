import { uploadFileToCloudinary } from "../../../../lib/uploadFile";
import { uploadMiddleware, runMiddleware } from "../../../../lib/multer";
import { prisma } from "../../../../lib/prisma";

export async function POST(req, res) {
  const body = await req.formData();

  const file = body.get("file");
  const userId = body.get("userId");

  if (!file || typeof file === "string") {
    return new Response(JSON.stringify({ error: "No file provided" }), {
      status: 400,
    });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const originalname = file.name;

  try {
    const cloudinaryResult = await uploadFileToCloudinary(buffer, originalname);

    const document = await prisma.documents.create({
      data: {
        name: originalname,
        url: cloudinaryResult.secure_url,
        publicId: cloudinaryResult.public_id,
        userId: parseInt(userId),
      },
    });

    return new Response(JSON.stringify({ message: "Uploaded", document }), {
      status: 200,
    });
  } catch (error) {
    console.error("Upload failed", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
