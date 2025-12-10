export const createTodo = async (description: string): Promise<void> => {
  const body = { description };
  const todo = await fetch(`/api/todos`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return todo;
};

export const updateTodo = async (
  id: string,
  completed: boolean
): Promise<void> => {
  const body = { completed };
  const todo = await fetch(`/api/todos/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return todo;
};

export const deleteCompleted = async (): Promise<void> => {
  const todos = await fetch(`/api/todos`, {
    method: "DELETE",
  }).then((res) => res.json());

  return todos;
};
