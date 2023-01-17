const form = document.querySelector(".form");
const input = document.querySelector(".form-control");
const list = document.querySelector(".list-group");

form.addEventListener('submit', run);

function run(event) {
    event.preventDefault();/*Омтменям выделение*/

    let inner = input.value;/*Получаем значение*/

    /**/

    let li = `<li class="list-group-item">${inner}</li>`;/*Вносим значение в переменную*/
    $('.list-group').append(li);/*добавляем ее в список*/
}
