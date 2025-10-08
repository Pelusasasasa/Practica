import { createTodoHtml } from "./create-todo-html";

/**
 * 
 * @param {String} elementoId 
 * @param {Todo} todos 
*/

let element;

export const renderTodos = ( elementoId, todos = []) => {

    if(!element) element = document.querySelector(elementoId);

    if(!element) throw new Error(`Element ${elementoId} not found`)


    element.innerHTML = '';

    todos.forEach(todo => {
        element.append(createTodoHtml(todo))
    });

};