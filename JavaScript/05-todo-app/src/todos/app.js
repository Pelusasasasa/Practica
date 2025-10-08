import todoStore, { Filters } from '../store/todo.store';
import html from './app.html?raw'
import { renderPending, renderTodos } from './use-cases';

const elementIds = {
    TodoList: '.todo-list',
    newTodoInput: '#new-todo-input',
    clearCompletedButton: '.clear-completed',
    TodoFilters: '.filtro',
    pendingCountLabel: '#pending-count'
}

export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos( elementIds.TodoList, todos);
        updatePendingCount();
    };

    const updatePendingCount = () => {
        renderPending(elementIds.pendingCountLabel);
    };

    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();


    const newDescriptionInput = document.querySelector(elementIds.newTodoInput);
    const todoListUL = document.querySelector(elementIds.TodoList);
    const clearCompletedButton = document.querySelector(elementIds.clearCompletedButton);
    const filtersUL = document.querySelectorAll(elementIds.TodoFilters);

    newDescriptionInput.addEventListener('keyup', (e) => {
        if(e.keyCode !== 13) return;

        if(e.target.value.trim().length === 0) return;

        todoStore.addTodo(e.target.value);
        displayTodos();
        e.target.value = '';
    });

    todoListUL.addEventListener('click', e => {
        const element = e.target.closest('[data-id]');
        todoStore.tooggleTodo(element.getAttribute('data-id'));
        displayTodos();
    });

    todoListUL.addEventListener('click', e => {

        if(!e.target.classList.contains('destroy')) return;
        
        const element = e.target.closest('[data-id]');
        todoStore.deleteTodo(element.getAttribute('data-id'));
        displayTodos();
    });

    clearCompletedButton.addEventListener('click', e => {
        todoStore.deleteCompleted();
        displayTodos(); 
    });

    filtersUL.forEach( elem => {
        elem.addEventListener('click', e => {
            document.querySelector('.selected').classList.remove('selected');
            e.target.classList.add('selected');

            switch(e.target.text){
                case 'Todos':
                    todoStore.setFilter(Filters.All)
                break;
                case 'Pendientes':
                    todoStore.setFilter(Filters.Pending)
                break;
                case 'Completados':
                    todoStore.setFilter(Filters.Completed)
                break;
            }

            displayTodos();
        })
    })

};