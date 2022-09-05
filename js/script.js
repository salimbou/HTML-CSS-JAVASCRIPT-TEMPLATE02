let navbar = document.querySelector('.navbar');
let menuBtn = document.querySelector('#menu');

let cartItemContainer = document.querySelector('.cart-items-container');
let shoppingCart      = document.querySelector('#cart-btn');

let searchForm = document.querySelector('.serach-form');
let searchBtn  = document.querySelector('.fa-search');

menuBtn.addEventListener('click' , ()=>{
    navbar.classList.toggle('active');
    cartItemContainer.classList.remove('active');
    searchForm.classList.remove('active');
});

shoppingCart.addEventListener('click' , ()=>{
    cartItemContainer.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
});

searchBtn.addEventListener('click' , ()=>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItemContainer.classList.remove('active');
});

window.onscroll = ()=>{
    navbar.classList.remove('active');
    cartItemContainer.classList.remove('active');
    searchForm.classList.remove('active');
}