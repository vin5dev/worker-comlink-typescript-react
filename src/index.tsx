import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { wrap } from 'comlink'

function takeALongTimeToDoSomething() {
    const worker = new Worker('./my-first-worker', { name: 'my-first-worker', type: 'module' })
    const workerApi = wrap<import('./my-first-worker').MyFirstWorker>(worker)
    workerApi.takeALongTimeToDoSomething()
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

console.log('Do something')
takeALongTimeToDoSomething()
console.log('Do another thing')
