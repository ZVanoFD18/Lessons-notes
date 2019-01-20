//-----------------------------------------------------------------------------

// JS/3.*/ события
/*
click, contextmenu,
mouseover, mousedown, mouseup, mousemove
submit, focus, keydown, keyup
document.addEventListener("DOMContentLoaded" – браузер полностью загрузил HTML и построил DOM-дерево.
window.onload         – браузер загрузил все ресурсы.
window.onunload       - при уходе со страницы или закрытии. Отменить действие нельзя, но можно сделать что-то полезное.
window.onbeforeunload - при уходе со страницы или закрытии. Можно отменить действие и задать диалог.
*/
<
div
id = "elem"
onclick = "alert('onclick')" >
...<
/div>
elem.onclick = function (event) {
    return false; // Отменит стандартное действие браузера (напр, меню по правой кнопке мыши), но только для варианта с присвоением функции-обработчика.
};
elem.onclick = null;
elem.addEventListener('click', someFunction[, pharse
])    // IE8- attachEventListener, this undefined
elem.removeEventListener('click', someFunction[, pharse
]) // IE8- removehEventListener, this undefined

elem.addEventListener('contextmenu', someFunction[, false
])
; // Перехват при всплытии (по умолчанию).
elem.addEventListener('contextmenu', someFunction, true); // Перехват при погружении.
elem.addEventListener('contextmenu', function (event) {
//----------------------------------------------------------------------------------------------------------------------
    /**
     *  Отменит стандартное действие браузера ;
     *  напр: Отменяет submit формы; ввод символа на keydown; меню по правой кнопке мыши и т.д.
     *  keyup отменить не получается.
     *  @link {https://developer.mozilla.org/ru/docs/Web/API/Event/preventDefault}
     **/
    event.preventDefault();
    /**
     * Останавливает всплытие.
     */
    event.stopPropagation(); //
    /**
     * Останавливает всплытие и обработку событий на текущем элементе.
     * @link {}https://developer.mozilla.org/ru/docs/Web/API/Event/stopImmediatePropagation}
     * Если несколько слушателей прикреплены к одному и тому же элементу с одинаковым типом события,
     * тогда они будут вызваны в порядке своего добавления. Если один из этих слушателей вызовет
     * event.stopImmediatePropagation() тогда события оставшихся слушателей вызваны не будут.
     */
    event.stopImmediatePropagation(); //
//----------------------------------------------------------------------------------------------------------------------
    event.innerHTML;
    event.type; // click, contextmenu, ...
    event.eventPhase; // на какой фазе он сработал (погружение =1, всплытие = 3).
    // https://developer.mozilla.org/ru/docs/Web/API/Event/Comparison_of_Event_Targets
    event.target;                  // Самый глубокий DOM-element на котором произошло событие.
    event.currentTarget;           //<<this. DOM-element, поймавший событие.
                                   // По мере того, как происходит захват и всплытие событий, это значение изменяется.
    event.relatedTarget;           // сейчас не важно
    event.explicitOriginalTarget;  // сейчас не важно
    event.originalTarget;          // сейчас не важно
    event.clientX | clientY;//  координаты курсора относительно текущего окна.
    event.pageX | pageY;    //  координаты курсора относительно документа. Учитывается прокрутка.
                            // (для IE8-: нужно ставить по clientX/Y и прокрутке)
    event.which //Событие мыши - какая кнопка нажата: 1 левая, 2 средняя, 3 правая(для IE8-: нужно ставить из button)
    event.altKey | ctrlKey | shiftKey | metaKey(Mac) // Флаг нажатия спец.клавиши
});

document.onload = someFunction // См.ниже
    // DOMContentLoaded, – браузер построил DOM-дерево
    // load, – браузер загрузил все ресурсы.
    // beforeunload, unload – уход со страницы.
    //--- Отмена выделения
    //1.
    < div
ondblclick = "alert('Тест')"
onselectstart = "return false"
onmousedown = "return false" >
    Двойной клик сюда выведет "Тест", без выделения
< /div>

//2. Вешаем на ondblclick візов clearSelection
function clearSelection() {
    if (window.getSelection) {
        window.getSelection().removeAllRanges();
    } else { // старый IE
        document.selection.empty();
    }
}

//3. CSS user-select : none; << none, auto, text, contain, all, inherit, initial, unset
//---


//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
// 4. DOM, BOM
//--- Перемещение по DOM
// Список нод, содержит и текст типа "перевод каретки"
domEl.parentNode.innerHTML | innerText // Родительский DOM-элемент.
domEl.previousSibling.innerHTML  // Предыдущий в том же уровне вложенности
domEl.nextSibling.innerHTML      // Следующий в том же уровне вложенности
domEl.childNodes[0].innerHTML    // @type {NodeList}; document.documentElement.childNodes[0] - head
domEl.firstChild.innerHTML       // 1й потомок. то же, что и domEl.childNodes[0]
domEl.lastChild.innerHTML       // 1й потомок. то же, что и domEl.childNodes[domEl.childNodes.length -1]
// Колекция HTML-элементов
domEl.parentNode
domEl.previousElementSibling
domEl.nextElementSibling
domEl.children[0] // @type {HTMLCollection}; document.documentElement.children[0] - head
domEl.firstElementChild
domEl.lastElementChild
//Иллюстрация>>
document.documentElement.parentNode;    // document
document.documentElement.parentElement; // null
document.head.childNodes.length; // 97
document.head.children.length;   // 60
//--- Создание элементов
document.createAttribute();        // @TODO
document.createDocumentFragment(); // @TODO
document.createElement('div');     // Создать DIV
document.createTextNode();         // @TODO

domEl.append();       // @TODO
domEl.appendChild();  //
domEl.insertBefore(); //
domEl.replaceChild(); // @TODO
domEl.replaceWith();  // @TODO
//--- Сравнение DOM элементов
domEl1 != domEl2 ? "Разные DOM-элементы" : "Переменные JS ссылаются на один и тот же DOM-элемент"
//--- Свойства и методы DOM-элементов
domEl.nodeType
domEl.nodeName
domEl.textContent
domEl.innerText
domEl.innerHTML

domEl.tagName; // div, td, ...
domEl.parentNode; // domEl|null
domEl.contains(domEl2) ? "Да" : "Нет";
domEl.getBoundingClientRect(); // озвращаюет координаты элемента, в системе event.clientX|Y
domEl.hasAttribute();
domEl.getAttribute('href') // getAttribute вернет реальное значение атрибута, а domEl.href полный URL
domEl.setAttribute();
domEl.removeAttribute();
domEl.className // 'class1 class2 ...' все классы элемента в строке
domEl.classList // @type {DOMTokenList} Коллекция классов
domEl.classList.contains('className') ? 'Да' : 'Нет' //
domEl.classList.add('className')
domEl.classList.remove('className')
domEl.classList.toggle('className') // Если класса нет, добавляет, если есть то удаляет

//--- Селекторы
document.getElementsByName('userLogin'); // Только у document
domEl.getElementsByTagName('div');
domEl.getElementsByClassName('someClassName');
domEl.querySelectorAll('.someClassName[alt="aaa.jpg"]')[0].innerHTML;
domEl.querySelector('.someClassName[alt="aaa.jpg"]').innerHTML; // ближайший дочерний элемент (1й)
domEl.matches('a[href$="zip"') ? "Архив ZIP" : "что-то другое";
domEl.closest('a.someClassName'); // ближайший родительский элемент