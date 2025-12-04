import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { boolean, object, string } from "yup";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const take = Number(searchParams.get("take") ?? "10");
  const skip = Number(searchParams.get("skip") ?? "0");

  if (isNaN(take)) {
    return NextResponse.json(
      { message: "Take tiene que ser un numero" },
      { status: 400 }
    );
  }
  if (isNaN(skip)) {
    return NextResponse.json(
      { message: "Skip tiene que ser un numero" },
      { status: 400 }
    );
  }

  const todos = await prisma.todo.findMany({
    take,
    skip,
  });

  return NextResponse.json(todos);
}

const postSchema = object({
  description: string().required(),
  completed: boolean().optional().default(false),
});

export async function POST(request: Request) {
  try {
    const { description, completed } = await postSchema.validate(
      await request.json()
    );

    const todo = await prisma.todo.create({
      data: {
        description,
        completed,
      },
    });

    return NextResponse.json(todo);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error al crear el todo" },
      { status: 400 }
    );
  }
}
