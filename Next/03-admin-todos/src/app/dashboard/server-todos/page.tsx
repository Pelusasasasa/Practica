import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  title: "Listado de Todos",
  description: "Listado de todos los todos",
};

const ServerTodosPage = async () => {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });
  console.log("construido");
  return (
    <>
      <span className="text-3xl mb-10">Server Todos</span>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </>
  );
};

export default ServerTodosPage;
