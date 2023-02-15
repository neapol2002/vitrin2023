// let menuArrows = document.querySelectorAll('.nav-link__drop_on_off');
if (menuArrows.length > 0) {
for (let index = 0; index < menuArrows.length; index++) {
    const menuArrow = menuArrows[index];
    menuArrow.addEventListener("click", function (e) {
        menuArrow.classList.toggle('_active');
    });
}
 } 

let backArrows = document.querySelectorAll('.navigation-link__back');
if (backArrows.length > 0) {
for (let index = 0; index < backArrows.length; index++) {
    const backArrow = backArrows[index];
    // const upMenu = backArrow.closest('.nav-link__drop_on_off');
    // console.log(upMenu);
    backArrow.addEventListener("click", function (e) {
        let menuArrows = document.querySelectorAll('.navigation-link__dropli');
if (menuArrows.length > 0) {
for (let index = 0; index < menuArrows.length; index++) {
    const menuArrow = menuArrows[index];
    menuArrow.classList.remove('_active');
}
 } 
    // upMenu.classList.remove('_active');
    });
}
 } 
