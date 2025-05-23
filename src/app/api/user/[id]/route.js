import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET(req, { params }) {
  const userId = parseInt(params.id);

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        documents: true, // fetch related documents
      },
    });

    if (!user)
      return NextResponse.json({ error: "User not found" }, { status: 404 });

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
