import './style.css'
import viteLogo from '/vite.svg'
import { UsersApp } from './use-cases/users-app.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
    </div>
  </div>
`

const element = document.querySelector('.card');

UsersApp( element );