// Получает элементы
const dropdown = document.querySelector('.dropdown');
const button = document.querySelector('.dropbtn');

// При клике на кнопку переключаем класс "active"
button.addEventListener('click', function () {
    dropdown.classList.toggle('active');
});

// Закрывает список, если кликнули вне него
document.addEventListener('click', function (event) {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('active');
    }
});
// Конец Языковой Вкладки //

// Функционал Бургер-Меню Для Телефонов //
function myFunction() {
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
// Функционал Бургер-Меню Для Телефонов //
