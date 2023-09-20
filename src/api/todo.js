import { getAuthToken } from "../util/auth";
import fetchInstance from "./instance";

export const getTodos = async () => {
  return fetchInstance("/todos", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
    },
  });
};

export const createTodo = async (todo) => {
  return fetchInstance("/todos");
};

export const updateTodo = async (id, todo, isCompleted) => {
  return fetchInstance(`/todos/${id}`, { todo, isCompleted });
};

export const deleteTodo = async (id) => {
  return fetchInstance(`/todos/${id}`);
};
