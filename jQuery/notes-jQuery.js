/**
 * Jquery: Список селекторов
 * http://jquery.page2page.ru/index.php5/%D0%A1%D0%B5%D0%BB%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D1%8B
 */
// Получить информацию о библиотеке
$.fn; // Главный объект jQuery.
$.fn.jquery; // Возвразает версию, напр. "3.3.1"

// Найти элемент с id "idSomeDiv" и заменить его внутренний html
$('#idSomeDiv').html('<b>hello!</b>>')
// Найти элементы  по селектору и установить им inline CSS
$('*')
    .css('color', 'red') // CSS {color : red}
    .css('border', '1px solid blue'); // CSS {border : 1px solid blue}
// Объект jQuery на основании DOM-элемента
var jqObj = $(document.body.childNodes[0]);
// Объект jQuery на основании двух DOM-элементов
var jqObj = $(window, document);
// Найти все элеменнты <li> в первом элементе body
var jqObj = $('li', document.body.childNodes[0]);
// Выбрать все элементы с классом "menu" и найти в них элементы  с классом "active"
var jqObj = $('.active', $('.menu'));
// Проверить существует ли элемент с id "menu"
if($('#menu').length > 0){}
// Получить из объекта jQuery ссылку на DOM элемент.
var domElMenu = $('#menu')[0];
// Цепочка вызовов, демонстрирующая работу с классами CSS.
$('#menu')
    .removeClass('.hidden') // Удалить класс
    .addClass('.focused')   // Добавить класс
    .toggleClass('active'); // Удалить класс если он назначен, либо добавить класс если не назначен
// Создает новый DOM-элемент и сохраняет в переменную, но не добавляет в DOM-дерево.
var newDom = $('<div>some text</div>');
// Метод "is" возвращает true, если элемент с классом 'chat-icon-normalize' содержит еще класс 'chat-icon'
$('.chat-icon-normalize').is('.chat-icon'); // true|false
// Перебрать все выбранные элементы
$('div').each((index, el)=>{
    console.log(index);
});
// Фильтры
$('*')
    .filter('.chat-icon')      // Вернуть те элементы, у которых есть класс 'chat-icon'
    .not('.chat-icon-close')   // Убрать те, у кого есть класс 'chat-icon-close'
    .has('div.some-icon-text') // Оставить те, у кого внутри лежит div c классом 'some-icon-text'
// Поиск элементов относительно выборки (слева, права, сверу, внизу, певый, последний)
$('input').first(); // Первый input на странице
$('input').last();  // Последний input на странице
$('.chat-icon', $('.chat-title')).first(); // В элементе с классом 'chat-title' найти первый с классом 'chat-icon'
$('.chat-icon', $('.chat-title')).last();  // В элементе с классом 'chat-title' найти последний с классом 'chat-icon'
$('.chat-icon-collapse').siblings(); // [0,1] Предыдущий и следующий элементы относительно найденого.
$('.chat-icon-collapse').prev(); // Предыдущий элемент на том же уровне
$('.chat-icon-collapse').next(); // Следующий элемент на том же уровне
$('.chat-title').parent(); // Возвращает непосредственного родителя для элемента с классом 'chat-title'
$('.chat-opened').children(); // Возвращает непосредственных потомков для '.chat-opened'
$('.chat-opened').find('.chat-icon'); // В '.chat-opened' находит все '.chat-icon' независимо от уровня вложенности
// Работа с формами
$('.chat-opened input[name="hiro"]') // найти input
    .val('Герой1') // Установить значение
    .val(); // Вернуть значение
$('input[type="checkbox"]').prop('checked', 'checked'); // установить отметку на checkbox
// Цепочка для добавления ссылки
$('<a href="#"></a>') // Создаем DOM-элемент
    .appendTo('.chat-opened') // добавляем его в '.chat-opened'
    .attr('href', 'https://google.com') // меняем ему ссылку
    .html('Ссылка'); // Задаем внутренний HTML
//-----------------------------------------------------------------------------
// Перемещает '.chat-icon-title' в блок '.chat-title-icons'
// Вариант 1. Найти "Что перемещаем" и добавить в "куда перемещаем".
$('.chat-opened') // Найти главный контейнер
    .find('.chat-icon-title') // найти иконку
    .appendTo( // переместить ее в...
        $('.chat-title-icons') // ...в найденый контейнер для иконок
    );
// Вариант 2. Найти "Куда перемещаем" и указать "что перемещаем".
$('.chat-title-icons') // найти блок, в который переносим элемент
    .append( // переносим
        $('.chat-opened') // ищем контейнер с иконкой
            .find('.chat-icon-title') // ищем в контейнере иконку
    );
//-----------------------------------------------------------------------------
