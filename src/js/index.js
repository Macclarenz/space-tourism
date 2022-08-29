// this is for deployment in netlify for the react-router to work
// import '../_redirects'

import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './app/app'
import server from '../server'
import store from './app/store'

server()

// fetch('/api/technology')
//     .then(res => res.json())
//     .then(jsonRes => console.log(jsonRes))

const root = createRoot(document.querySelector('.outer-container'))

function render() {
    root.render(
        <Provider store = {store}>
            <App />
        </Provider>
    )
}

render()

