import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { enviromentsComponent } from './concepts/01-enviroment'
import { demoComponent } from './concepts/demo'
import { callbacksComponent } from './concepts/02-callbacks'
import { promisesComponent } from './concepts/03-promises'
import { promiseRaceComponent } from './concepts/04-promises-race'
import { asyncComponent } from './concepts/05-async'
import { asynAwaitComponent } from './concepts/06-async-await'
import { asyncAwait2Component } from './concepts/07-async-await'
import { forAwaitComponent } from './concepts/08-for-await'
import { generetorFuctionsComponent } from './concepts/09-generator'
import { generetorAsyncComponent } from './concepts/10-generator-async'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      
    </div>
  </div>
`
const element = document.querySelector('.card');
// callbacksComponent(element);
generetorAsyncComponent(element);