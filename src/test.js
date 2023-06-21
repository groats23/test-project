const btnDropDownRef = document.querySelector('.dropbtn'); // Получаем ссылку на элемент с классом 'dropbtn' и сохраняем в переменную btnDropDownRef

const btnAddShopList = document.querySelector('.js-btn-addlist'); // Получаем ссылку на элемент с классом 'js-btn-addlist' и сохраняем в переменную btnAddShopList

const pileBooksRef = document.querySelector('.js-screen-saver'); // Получаем ссылку на элемент с классом 'js-screen-saver' и сохраняем в переменную pileBooksRef

btnDropDownRef.addEventListener('click', makeDropDown); // Добавляем обработчик события клика на элемент btnDropDownRef, вызывающий функцию makeDropDown

function makeDropDown() {
  document.getElementById('myDropdown').classList.toggle('show'); // Получаем ссылку на элемент с id 'myDropdown' и переключаем у него класс 'show'
}

document.addEventListener('click', makeDropClose); // Добавляем обработчик события клика на документ, вызывающий функцию makeDropClose

function makeDropClose(event) {
  if (
    !event.target.matches('.dropbtn') && // Проверяем, не кликнули ли мы на элемент с классом 'dropbtn'
    !event.target.matches('.dropbtn span') && // Проверяем, не кликнули ли мы на элемент 'span', являющийся потомком элемента с классом 'dropbtn'
    !event.target.matches('.dropbtn use') && // Проверяем, не кликнули ли мы на элемент 'use', являющийся потомком элемента с классом 'dropbtn'
    !event.target.matches('.dropbtn img') && // Проверяем, не кликнули ли мы на элемент 'img', являющийся потомком элемента с классом 'dropbtn'
    !event.target.matches('.dropbtn svg') // Проверяем, не кликнули ли мы на элемент 'svg', являющийся потомком элемента с классом 'dropbtn'
  ) {
    const dropdowns = document.getElementsByClassName('dropdown-content'); // Получаем ссылки на все элементы с классом 'dropdown-content' и сохраняем в переменную dropdowns
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i]; // Сохраняем ссылку на текущий элемент в переменной openDropdown
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show'); // Если у текущего элемента есть класс 'show', удаляем его
      }
    }
  }
}

const onShopListRef = document.querySelector('.js-container-list-shop'); // Получаем ссылку на элемент с классом 'js-container-list-shop' и сохраняем в переменную onShopListRef

import { setLocalData, getLocalData } from './index'; // Импортируем функции setLocalData и getLocalData из модуля './index'

const KEY_ADD_BOOKS = 'shoplist'; // Создаем константу KEY_ADD_BOOKS со значением 'shoplist'

function markupShopList(parsedBooks) {
  let markup = '';
  if (parsedBooks === undefined) {
    return;
  }
  onShopListRef.innerHTML = ''; // Очищаем содержимое элемента onShopListRef
  markup = parsedBooks
    .map(
      book => `<li class="item ">
	<button type="button" class="button close js-btn-addlist" data-buy="delete-book">
	<img class="img" src="https://github.com/vicotroshenko/bookstore/blob/main/src/images/trash.png?raw=true" alt="${book.title}">
</button>
	<div class="book-cover shop-list">
		<img src="${book.book_image}" alt="${book.title}" class="img">
	</div>
	<div class="book-describe">
		<h2 class="subject">${book.title}</h2>
		<span class="category">${book.list_name}</span>
		<p class="describe">${book.description}</p>
		<div>
			<span class="author">${book.author}</span>
		<ul class="list">
			<li class="book-link">
				<a href="${book.buy_links[0].url}" class="link" target=”_blank”>
					<img src="https://github.com/groats23/test-project/blob/main/src/images/amazon.png?raw=true"
						alt="amazon shop" class="img">
				</a>
			</li>
			<li class="book-link">
				<a href="${book.buy_links[1].url}" class="link" target=”_blank”>
					<img
						src="https://github.com/vicotroshenko/bookstore/blob/main/src/images/appel-books.png?raw=true"
						alt="apple-books shop" class="img">
				</a>
			</li>
			<li class="book-link">
				<a href="${book.buy_links[4].url}" class="link" target=”_blank”>
					<img src="https://github.com/vicotroshenko/bookstore/blob/main/src/images/bookshop.png?raw=true"
						alt="bookshop" class="img">
				</a>
			</li>
		</ul>
		</div>
	</div>
</li>`
    )
    .join(''); // Создаем HTML-разметку на основе данных parsedBooks
  onShopListRef.innerHTML = markup; // Вставляем разметку в элемент onShopListRef
  const btnDeleteRef = document.querySelectorAll('[data-buy="delete-book"]'); // Получаем ссылки на все элементы с атрибутом data-buy="delete-book" и сохраняем в переменную btnDeleteRef
  btnDeleteRef.forEach(
    btn => btn.addEventListener('click', deleteBookFromList) // Добавляем обработчик события клика на каждый элемент из btnDeleteRef, вызывающий функцию deleteBookFromList
  );
}

function deleteBookFromList(event) {
  const parsedBooks = getLocalData(KEY_ADD_BOOKS).filter(
    element => element.title !== event.target.alt // Получаем данные из локального хранилища с ключом KEY_ADD_BOOKS, фильтруем их и сохраняем в переменную parsedBooks, исключая книгу с заголовком, соответствующим значению alt цели клика
  );
  setLocalData(KEY_ADD_BOOKS, parsedBooks); // Сохраняем новые данные в локальном хранилище с ключом KEY_ADD_BOOKS
  getFirstPage(); // Вызываем функцию getFirstPage
  markupShopList(); // Вызываем функцию markupShopList
}

import Pagination from 'tui-pagination'; // Импортируем класс Pagination из модуля 'tui-pagination'
import 'tui-pagination/dist/tui-pagination.css'; // Импортируем стили для Pagination
const container = document.getElementById('pagination'); // Получаем ссылку на элемент с id 'pagination' и сохраняем в переменную container
const options = {
  totalItems: getLocalData(KEY_ADD_BOOKS).length, // Задаем общее количество элементов в пагинации, получая данные из локального хранилища с ключом KEY_ADD_BOOKS и получая их длину
  itemsPerPage: 3, // Задаем количество элементов на одной странице пагинации
  visiblePages: 2, // Задаем количество видимых страниц в пагинации
  page: 1, // Задаем текущую страницу пагинации
  centerAlign: false, // Задаем выравнивание пагинации по центру
  firstItemClassName: 'tui-first-child', // Задаем класс для первого элемента в пагинации
  lastItemClassName: 'tui-last-child', // Задаем класс для последнего элемента в пагинации
  template: {
    page: '<a href="#" class="tui-page-btn tui-own-styles">{{page}}</a>', // Задаем шаблон для отображения страницы
    currentPage:
      '<strong class="tui-page-btn tui-is-selected tui-own-styles">{{page}}</strong>', // Задаем шаблон для отображения текущей страницы
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}} tui-own-styles">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>', // Задаем шаблон для отображения кнопок перехода между страницами
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}} tui-own-styles">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>', // Задаем шаблон для отображения неактивных кнопок перехода между страницами
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip tui-own-styles">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>', // Задаем шаблон для отображения кнопки "еще"
  },
};
const pagination = new Pagination(container, options); // Создаем экземпляр класса Pagination с использованием контейнера и опций

function getFirstPage() {
  pileBooksRef.style.display = 'none'; // Скрываем элемент pileBooksRef
  const sliceBooks = getLocalData(KEY_ADD_BOOKS).slice(
    (options.page - 1) * options.itemsPerPage, // Вычисляем индекс первого элемента на странице
    options.page * options.itemsPerPage // Вычисляем индекс последнего элемента на странице
  );
  markupShopList(sliceBooks); // Вызываем функцию markupShopList, передавая ей срезанные данные
  if (
    getLocalData(KEY_ADD_BOOKS).length > options.itemsPerPage // Проверяем, есть ли в общем списке больше элементов, чем на одной странице
  ) {
    pagination.reset(getLocalData(KEY_ADD_BOOKS).length); // Сбрасываем пагинацию с обновленным общим количеством элементов
  } else {
    pagination.reset(1); // Сбрасываем пагинацию с одной страницей
  }
}
