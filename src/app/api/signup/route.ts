
import { hash } from "bcryptjs";
import { prisma } from "../../../lib/prisma";



export async function POST(req: Request) {
  const body = await req.json();

  const {
    fullName, email, phoneNumber, password,
    city, state, country, aadhaarNumber, panNumber
  } = body;

  const userExists = await prisma.user.findUnique({
    where: { email }
  });

  if (userExists) {
    return Response.json({ message: "User already exists" }, { status: 400 });
  }

  const hashedPassword = await hash(password, 10);

  const user = await prisma.user.create({
    data: {
      fullName,
      email,
      phoneNumber,
      password: hashedPassword,
      city,
      state,
      country,
      aadhaarNumber,
      panNumber
    }
  });

  return Response.json({ message: "User created successfully", user });
}
