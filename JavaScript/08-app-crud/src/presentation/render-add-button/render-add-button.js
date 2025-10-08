import { showModal } from '../render-modal/render-modal';
import './render-add-button.css';
export const renderAddButton = (element) => {
    const button = document.createElement('button');
    button.innerText = '+';
    button.classList.add('fab-button');
    element.appendChild(button);

    button.addEventListener('click', () => {
        showModal();
    });
};