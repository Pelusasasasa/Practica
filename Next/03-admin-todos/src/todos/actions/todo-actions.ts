"use server";

import { Todo } from "@/generated/prisma/client";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const sleep = async (seconds: number = 0) => {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};

export const toggleTodo = async (
  id: string,
  completed: boolean
): Promise<Todo> => {
  await sleep(3);
  const todo = await prisma.todo.findFirst({ where: { id } });

  if (!todo) {
    throw `Todo con el id ${id} no encontrado`;
  }

  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { completed },
  });

  revalidatePath("/dashboard/server-todos");
  return updatedTodo;
};

export const createTodo = async (description: string) => {
  try {
    const newTodo = await prisma.todo.create({
      data: { description },
    });

    revalidatePath("/dashboard/server-todos");
    return newTodo;
  } catch (error) {
    return {
      msg: "Error al crear la tarea",
    };
  }
};

export const deleteCompleted = async (): Promise<void> => {
  try {
    await prisma.todo.deleteMany({
      where: { completed: true },
    });

    revalidatePath("/dashboard/server-todos");
  } catch (error) {
    console.error(error);
  }
};
