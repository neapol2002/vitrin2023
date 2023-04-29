
/*let column__report = document.querySelector('.column__report');
let column__share = document.querySelector('.column__share');
let column__delate = document.querySelector('.column__delate');
let column__edit = document.querySelector('.column__edit');
let report_items = document.querySelector('.ads_report_items');
let delate_items = document.querySelector('.ads_delate_items');
let edit_items = document.querySelector('.ads_edit_items');
let estate__share = document.querySelector('.estate__share');
// let psw__edit = document.querySelector('.user_psw_change');
// let psw__window = document.querySelector('.user_password_change');





column__report.onclick = function(){
    report_items.classList.toggle('open');
}

column__delate.onclick = function(){
    delate_items.classList.toggle('open');
}

column__edit.onclick = function(){
    edit_items.classList.toggle('open');
}

column__share.onclick = function(){
    estate__share.classList.toggle('open');
}
*/
// psw__edit.onclick = function(){
//     psw__window.classList.toggle('open');
// }

let column__like = document.querySelector('.column__like');
let column__like_p = column__like.querySelector('p');
let column__like_icon = column__like.querySelector('svg');

column__like.onclick = function() {
    column__like_p.classList.toggle('liked');

    if (column__like_p.classList.contains('liked')) {
    column__like_p.innerHTML = 'Seçilmişdir'
    column__like_p.style.color = 'red'
    column__like_p.style.fontWeight = '500'
    column__like_icon.style.fill = 'red'
}
else {
    column__like_p.innerHTML = 'Seçilmiş et'
    column__like_p.style.color = 'black'
    column__like_icon.style.fill = '#1067bf'
    column__like_p.style.fontWeight = '500'
}
}

// Нашли все заголовки табов по data атрибуту
const tabHeaders = document.querySelectorAll('[data-tab]');
// Нашли все контент боксы
const contentBoxes = document.querySelectorAll('[data-tab-content]');

tabHeaders.forEach(function (item) {
    item.addEventListener('click', function () {

        // 1. Скрыть все content box
        contentBoxes.forEach(function (item) {
            item.classList.remove('open');
        });

        // 2. Выбрать нужный content box и показать его
        const contentBox = document.querySelector('#' + this.dataset.tab);
        contentBox.classList.add('open');

    })
})

let elanClose = document.querySelectorAll('.ads_title_close');
// console.log(elanClose);

for (let i = 0; i < elanClose.length; i++) {
    // console.log(i);
    elanClose[i].onclick = tabsClose;
}

// let tabItems = document.querySelectorAll('.estate__config_column')
function tabsClose() {
for (let i = 0; i < contentBoxes.length; i++) {
    // console.log(i);
    if (contentBoxes[i].classList.contains('open')) {
    contentBoxes[i].classList.remove("open");
    // elanClose[i].onclick = closeTabs;
    }
}
}

// function closeTabs() {
//     contentBoxes.classList.remove("open");
// }

// function closeTitle() {
//     console.log('cliked');
// }

// for (let i = 0; i < elanClose.length; i++) {
   
//     elanClose[i].onclick = contentBoxes.forEach(function (item) {
//             item.classList.remove('open');
//         });
//     // contentBoxes.classList.remove("open");
// }