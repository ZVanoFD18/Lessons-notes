// ----------------------------------------------------------------------------
//--- Селекторы
document.getElementsByName('userLogin'); // Только у document
domEl.getElementsByTagName('div');
domEl.getElementsByClassName('someClassName');
domEl.querySelectorAll('.someClassName[alt="aaa.jpg"]')[0].innerHTML;
domEl.querySelector('.someClassName[alt="aaa.jpg"]').innerHTML; // ближайший дочерний элемент (1й)
domEl.matches('a[href$="zip"') ? "Архив ZIP" : "что-то другое";
domEl.closest('a.someClassName'); // ближайший родительский элемент ПО СЕЛЕКТОРУ!

/**
 * При клике на єлемент elMenuText выйти на уровень выше и найти первый элемент с классом "menu-items".
 **/
elMenuText.addEventListener('click', function (event) {
    let elItems = event.target.parentElement.querySelector('.menu-items');
}
/**
 * При клике на єлемент elMenuText найти в цепочке родителей заданный
 * https://developer.mozilla.org/ru/docs/Web/API/Element/closest
 **/
elMenuText.addEventListener('click', function (event) {
    let elMenuRoot = event.target.closest('.menu-root'); // ближайший родительский элемент
}


// Нативные эквиваленты функций jQuery
// https://frontender.info/native-methods-jquery/