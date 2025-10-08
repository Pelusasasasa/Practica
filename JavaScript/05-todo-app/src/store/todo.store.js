import { Todo } from "../todos/models/todo.model";

export const Filters = {
    All: 'All',
    Pending: 'Pending',
    Completed: 'Completed'
};

const state = {
    todos: [
        { id: 1, description: 'Learn React', done: false },
        { id: 2, description: 'Learn Redux', done: false },
        { id: 3, description: 'Learn React-Redux', done: false }
    ],
    filter: Filters.All
};

const initialStore = () => {
    loadStore();
    console.log('initialStore aguacate');
};


const loadStore = () => {
    if (!localStorage.getItem('state')) return;

    const {todos = [], filter = Filters.All} = JSON.parse(localStorage.getItem('state'));
    state.todos = todos;
    state.filter = filter;
};

const saveStateToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(state));
}

const getTodos = ( filter = Filters.All) => {
    switch (filter) {
        case Filters.All:
            return state.todos;
        case Filters.Completed:
            return state.todos.filter(todo => todo.done);
        case Filters.Pending:
            return state.todos.filter(todo => !todo.done);
        default:
            throw new Error(`Option ${filter} is not defined`);
    }
}

const addTodo = ( description ) => {
    if (!description) throw new Error('Description is required');

    state.todos.push(new Todo(description));
    saveStateToLocalStorage();
};

const tooggleTodo = ( todoId ) => {
    state.todos.map(todo => {
        if (todoId == todo.id) todo.done = !todo.done;

        return todo;
    });

    saveStateToLocalStorage();
};

const deleteTodo = ( todoId )  => {
    state.todos = state.todos.filter(todo => todo.id != todoId);
    saveStateToLocalStorage();
}

const deleteCompleted = (  ) => {
    state.todos = state.todos.filter(todo => !todo.done);
    saveStateToLocalStorage();
}

const setFilter = ( newFilter = Filters.All ) => {
    state.filter = newFilter;
    saveStateToLocalStorage();
};

const getCurrentFilter = () => {
    return state.filter;
}


export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initialStore,
    loadStore,
    setFilter,
    tooggleTodo,
}