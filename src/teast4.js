// Отримуємо посилання на необхідні елементи DOM
const bookList = document.getElementById('book-list');
const message = document.getElementById('message');

// Збережені книги з localStorage або створимо новий масив
const savedBooks = localStorage.getItem('shoppingList');
let books = savedBooks ? JSON.parse(savedBooks) : [];

// Перевіряємо, чи є збережені книги
if (books.length > 0) {
  // Малюємо кожну книгу на сторінці
  books.forEach(book => {
    const bookCard = createBookCard(book);
    bookList.appendChild(bookCard);
  });
} else {
  // Показати повідомлення, якщо немає збережених книг
  message.textContent = 'Немає доданих книг у списку';
}

// Функція для створення карточки книги
function createBookCard(book) {
  const bookCard = document.createElement('li');
  bookCard.classList.add('item');

  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.classList.add('button', 'close', 'js-btn-addlist');
  deleteButton.dataset.buy = 'delete-book';
  deleteButton.innerHTML = `
    <img class="img" src="https://github.com/vicotroshenko/bookstore/blob/main/src/images/trash.png?raw=true" alt="${book.title}">
  `;

  const bookCover = document.createElement('div');
  bookCover.classList.add('book-cover', 'shop-list');
  bookCover.innerHTML = `
    <img src="${book.book_image}" alt="${book.title}" class="img">
  `;

  const bookDescribe = document.createElement('div');
  bookDescribe.classList.add('book-describe');
  bookDescribe.innerHTML = `
    <h2 class="subject">${book.title}</h2>
    <span class="category">${book.list_name}</span>
    <p class="describe">${book.description}</p>
    <div>
      <span class="author">${book.author}</span>
      <ul class="list">
        <li class="book-link">
          <a href="${book.buy_links[0].url}" class="link" target="_blank">
            <img src="https://github.com/groats23/test-project/blob/main/src/images/amazon.png?raw=true" alt="amazon shop" class="img">
          </a>
        </li>
        <li class="book-link">
          <a href="${book.buy_links[1].url}" class="link" target="_blank">
            <img src="https://github.com/vicotroshenko/bookstore/blob/main/src/images/appel-books.png?raw=true" alt="apple-books shop" class="img">
          </a>
        </li>
        <li class="book-link">
          <a href="${book.buy_links[4].url}" class="link" target="_blank">
            <img src="https://github.com/vicotroshenko/bookstore/blob/main/src/images/bookshop.png?raw=true" alt="bookshop" class="img">
          </a>
        </li>
      </ul>
    </div>
  `;

  bookCard.appendChild(deleteButton);
  bookCard.appendChild(bookCover);
  bookCard.appendChild(bookDescribe);

  return bookCard;
}

// Додавання книги до списку покупок
function addBookToShoppingList(book) {
  books.push(book);
  saveBooksToLocalStorage();
  const bookCard = createBookCard(book);
  bookList.appendChild(bookCard);
}

// Збереження книг у localStorage
function saveBooksToLocalStorage() {
  localStorage.setItem('shoppingList', JSON.stringify(books));
}
