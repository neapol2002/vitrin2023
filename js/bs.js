let header_burger = document.querySelector('.header_burger');
let menuArrows = document.querySelectorAll('.navigation-link__dropli');
let nav = document.querySelector('.nav');
let back = document.querySelector('body');
// let nav__link = document.querySelector('.header__navigation-link');



header_burger.onclick = function(){
    header_burger.classList.toggle('active');
    nav.classList.toggle('active');
    back.classList.toggle('lock');
   
   if (menuArrows.length > 0) {
for (let index = 0; index < menuArrows.length; index++) {
    const menuArrow = menuArrows[index];
    if (menuArrow.classList.contains('_active'))
    menuArrow.classList.remove('_active');
};
 }; 

};

// back.addEventListener('click', function (event) {
//     const self = event.target.closest('.header_burger');
//     if (!self) {
//         header_burger.classList.remove('active')
//     }
// })


// burger menyunun kenara klikleyende baglanmasi
// const burgerMain = document.querySelector('.burger_main');
// back.addEventListener('click', (e) => {
//   const click = e.composedPath().includes(burgerMain);
//   if ( !click ) {
//     header_burger.classList.remove('active');
//     nav.classList.remove('active');
//     back.classList.remove('lock');
//   }
// })



// nav__link.onclick = function (){
//     nav.classList.remove('active');
//     back.classList.toggle('lock');
// }