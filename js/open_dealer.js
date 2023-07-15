// like buuton design
let btn__fav = document.querySelector('.backfeed_fav');
let btn__fav_s = btn__fav.querySelector('span');
let btn__fav_icon = btn__fav.querySelector('svg');

btn__fav.onclick = function() {
    btn__fav_s.classList.toggle('liked');

    if (btn__fav_s.classList.contains('liked')) {
    btn__fav_s.innerHTML = 'Seçilmişdir'
    btn__fav_s.style.color = 'red'
    btn__fav_s.style.fontWeight = '500'
    btn__fav_icon.style.fill = 'red'
}
else {
    btn__fav_s.innerHTML = 'Seçilmiş et'
    btn__fav_s.style.color = 'black'
    btn__fav_icon.style.fill = '#1067bf'
    btn__fav_s.style.fontWeight = '500'
}
}

let btn__like = document.querySelector('.backfeed_like');
let btn__like_s = btn__like.querySelector('p');
let btn__like_icon = btn__like.querySelector('svg');


btn__like.onclick = function() {
    btn__like_s.classList.toggle('liked');

    if (btn__like_s.classList.contains('liked')) {
    btn__like_s.innerHTML = 'Bəyənilmişdir'
    btn__like_s.style.color = 'red'
    btn__like_s.style.fontWeight = '500'
    btn__like_icon.style.fill = 'red'
}
else {
    btn__like_s.innerHTML = 'Bəyən'
    btn__like_s.style.color = 'black'
    btn__like_icon.style.fill = '#1067bf'
    btn__like_s.style.fontWeight = '500'
}
}

// Нашли все заголовки табов по data атрибуту
const reportHeaders = document.querySelectorAll('[data-tab]');
// Нашли все контент боксы
const reportBoxes = document.querySelectorAll('[data-tab-content]');

reportHeaders.forEach(function (item) {
    item.addEventListener('click', function () {

        // 1. Скрыть все content box
        reportBoxes.forEach(function (item) {
            item.classList.remove('open');
        });

        // 2. Выбрать нужный content box и показать его
        const reportBox = document.querySelector('#' + this.dataset.tab);
        reportBox.classList.add('open');

    })
})

let reportClose = document.querySelectorAll('.ads_title_close');
// console.log(elanClose);

for (let i = 0; i < reportClose.length; i++) {
    // console.log(i);
    reportClose[i].onclick = iconClose;
}

// let tabItems = document.querySelectorAll('.estate__config_column')
function iconClose() {
for (let i = 0; i < reportBoxes.length; i++) {
    // console.log(i);
    if (reportBoxes[i].classList.contains('open')) {
    reportBoxes[i].classList.remove("open");
    // elanClose[i].onclick = closeTabs;
    }
}
}
