let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu');
let bell = document.querySelector('.notification');
menu.addEventListener('click',()=>{
    menu.classList.toggle('move');
    navbar.classList.toggle('active');
    bell.classList.remove('active');
})
document.querySelector('#bell-icon').addEventListener('click', ()=>{
    bell.classList.toggle('active');
})

var swiper = new Swiper(".trending-content ", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay:{
        delay: 5000,
        disableOnInteraction:false,
    },
    breakpoints: {
        640: {
        slidesPerView: 2,
        spaceBetween: 100,
        },
        768: {
        slidesPerView: 4,
        spaceBetween: 15,
        },
        1068: {
        slidesPerView: 5,
        spaceBetween: 50,
        },
    },
});


window.onscroll = function(){scrollfuction()}

function scrollfuction(){
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100
    document.getElementById('scroll-bar').style.width = scrolled + '%'
}