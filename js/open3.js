


// Нашли все заголовки табов по data атрибуту
const tabHeaders = document.querySelectorAll('[data-tab]');
// Нашли все контент боксы
const contentBoxes = document.querySelectorAll('[data-tab-content]');

let elanItem = document.querySelectorAll('.elan_param__item');
let elanItem1 = document.querySelectorAll('.elan_param__subitem');


// for (let i = 0; i < elanItem.length; i++) {
//     // console.log(i);
//     elanItem[i].onclick = elanItem.classList.togle;
// }

function hideTab() {
    for (let i = 0; i < elanItem.length; i++) {
        if (elanItem[i].classList.contains('show')) {
            elanItem[i].classList.remove('show');
            break;
        }
    }
}

function toggleTab1(i) {
    elanItem1[i].addEventListener('click', function (event) {
        hideTab1();
        elanItem1[i].classList.add('show');
    });
};

for (let i = 0; i <elanItem1.length; i++) {
    toggleTab1(i);
}



function hideTab1() {
    for (let i = 0; i < elanItem1.length; i++) {
        if (elanItem1[i].classList.contains('show')) {
            elanItem1[i].classList.remove('show');
            break;
        }
    }
}



function toggleTab(i) {
    elanItem[i].addEventListener('click', function (event) {
        hideTab();
        elanItem[i].classList.add('show');
    });
};

for (let i = 0; i <elanItem.length; i++) {
    toggleTab(i);
}



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

let elanClose = document.querySelectorAll('.elan_param__close');
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