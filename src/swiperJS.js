// import Swiper from "swiper";

// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,

//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//     },

//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     // And if we need scrollbar
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },
// })

// import Swiper from "swiper"
// import Swiper from "swiper/bundle";
// import 'swiper/css/swiper.min.css'

// document.addEventListener('DOMContentLoaded', function () {
//     const swiper = new Swiper('.swiper', {
//         slidesPerView: 2,
//         direction: getDirection(),
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//         on: {
//             resize: function () {
//                 swiper.changeDirection(getDirection());
//             },
//         },
//     });

//     function getDirection() {
//         const windowWidth = window.innerWidth;
//         const direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

//         return direction;
//     }
// })