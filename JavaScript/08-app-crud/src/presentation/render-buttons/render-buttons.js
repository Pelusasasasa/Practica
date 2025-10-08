import usersStore from "../../store/users-store";
import { renderTable } from "../render-table/render-table";
import './render-buttons.css';

export const renderButtons = ( element ) => {
    const nextButton = document.createElement( 'button' );
    nextButton.textContent = 'Next >';

    const previusButton = document.createElement( 'button' );
    previusButton.textContent = '< Prev ';

    const curretPageLabel = document.createElement( 'span' );
    curretPageLabel.id = 'current-page';
    curretPageLabel.innerText = usersStore.getCurrentPage();

    element.append( previusButton, curretPageLabel, nextButton );

    nextButton.addEventListener('click', async() => {
        await usersStore.loadNextPage();
        curretPageLabel.innerText = usersStore.getCurrentPage();
        renderTable( element );
    });

    previusButton.addEventListener('click', async() => {
        await usersStore.loadPreviousPage();
        curretPageLabel.innerText = usersStore.getCurrentPage();
        renderTable( element );
    });
};