// import _ from 'lodash'
import './styles.css'
// import './sass/main.scss'

// function component() {
//     const element = document.createElement('div')

//     // Lodash, now imported by this script
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ')

//     return element
// }

// document.body.appendChild(component())


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)