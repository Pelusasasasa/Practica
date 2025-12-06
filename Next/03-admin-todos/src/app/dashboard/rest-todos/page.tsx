import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";

export const metadata = {
  title: "Listado de Todos",
  description: "Listado de todos los todos",
};

const RestTodoPage = async () => {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });

  return (
    <div>
      {/*Todod: Formulario para agregar */}
      <h1>Page Rest Todos</h1>
      <TodosGrid todos={todos} />
    </div>
  );
};

export default RestTodoPage;
