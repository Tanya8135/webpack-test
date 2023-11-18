// /**
//  * Slick slider
//  */
// $(document).ready(function () {
//     $('.box-slide').slick({
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: false,
//     });

//     let filtered = false;

//     $('.js-filter').on('click', function () {
//         if (filtered === false) {
//             $('.box-slide').slick('slickFilter', ':even');
//             $(this).text('Unfilter Slides');
//             filtered = true;
//         } else {
//             $('.box-slide').slick('slickUnfilter');
//             $(this).text('Filter Slides');
//             filtered = false;
//         }
//     });
// });