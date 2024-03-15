const menuicon = document.querySelector(".menu-icon");
const menulist = document.querySelector(".menu-list");
const c1 = document.querySelector(".c-1");
const c2 = document.querySelector(".c-2");
const c3 = document.querySelector(".c-3");

menuicon.addEventListener("click", function () {
    menulist.classList.toggle("show-list");
    c1.classList.toggle("cross");
    c2.classList.toggle("line-22");
    c3.classList.toggle("cross-2");

})


$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
            }
        }
    ]
});