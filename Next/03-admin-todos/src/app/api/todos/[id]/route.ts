import { Todo } from "@/generated/prisma/client";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { boolean, object, string } from "yup";
interface Segments {
  params: {
    id: string;
  };
}

export async function GET(request: Request, { params }: Segments) {
  const id = (await params).id;
  const todo = await prisma.todo.findUnique({
    where: {
      id: id,
    },
  });

  if (!todo) {
    return NextResponse.json(
      { message: "Todo no encontrado" },
      { status: 404 }
    );
  }

  return NextResponse.json(todo);
}

const putSchema = object({
  description: string().optional(),
  completed: boolean().optional(),
});

export async function PUT(request: Request, { params }: Segments) {
  const id = (await params).id;

  try {
    const { description, completed } = await putSchema.validate(
      await request.json()
    );

    const todo = await prisma.todo.update({
      where: {
        id: id,
      },
      data: {
        description,
        completed,
      },
    });

    if (!todo) {
      return NextResponse.json(
        { message: "Todo no encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json(todo);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error al actualizar el todo" },
      { status: 400 }
    );
  }
}
