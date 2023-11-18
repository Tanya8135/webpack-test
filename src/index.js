// import _ from 'lodash';
// import './styles.css';
// import './sass/main.scss';



// function component() {
//     const element = document.createElement('div')

//     // Lodash, now imported by this script
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ')

//     return element
// }

// document.body.appendChild(component())

import Swiper from "swiper/bundle";
import 'swiper/css/bundle';
import './styles.css';

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 2,
        direction: getDirection(),
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            resize: function () {
                swiper.changeDirection(getDirection());
            },
        },
    });

    function getDirection() {
        const windowWidth = window.innerWidth;
        const direction = window.innerWidth <= 320 ? 'vertical' : 'horizontal';

        return direction;
    }
})
// /**
//  * for REACT
//  */
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./components/App.jsx";
// import './styles.css'

// const root = ReactDOM.createRoot(document.getElementById('app'))
// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// )