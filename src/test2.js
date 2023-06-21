const container = document.querySelector('.js-container-list-shop');

// Функція для додавання нової книги до списку
function addBookToShoppingList(title, author) {
  const bookItem = document.createElement('li');
  bookItem.classList.add('book-item');

  const bookContent = `
    <div class="book-details">
      <h3 class="book-title">${title}</h3>
      <p class="book-author">By ${author}</p>
    </div>
    <button class="remove-button">Remove</button>
  `;

  bookItem.innerHTML = bookContent;

  const removeButton = bookItem.querySelector('.remove-button');
  removeButton.addEventListener('click', () => {
    bookItem.remove();
    saveShoppingListToLocalStorage();
  });

  container.appendChild(bookItem);
  saveShoppingListToLocalStorage();
}

// Функція для збереження списку покупок у локальному сховищі
function saveShoppingListToLocalStorage() {
  const bookItems = container.querySelectorAll('.book-item');
  const shoppingList = [];

  bookItems.forEach(bookItem => {
    const titleElement = bookItem.querySelector('.book-title');
    const authorElement = bookItem.querySelector('.book-author');

    const title = titleElement.textContent;
    const author = authorElement.textContent.slice(3); // Видаляємо "By " з початку рядка

    const book = {
      title: title,
      author: author,
    };

    shoppingList.push(book);
  });

  localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
}

// Функція для завантаження списку покупок з локального сховища
function loadShoppingListFromLocalStorage() {
  const shoppingListJSON = localStorage.getItem('shoppingList');

  if (shoppingListJSON) {
    const shoppingList = JSON.parse(shoppingListJSON);

    shoppingList.forEach(book => {
      addBookToShoppingList(book.title, book.author);
    });
  }
}

// Виклик функції для завантаження списку покупок при завантаженні сторінки
loadShoppingListFromLocalStorage();

// Приклад виклику функції для додавання книги
addBookToShoppingList('The Great Gatsby', 'F. Scott Fitzgerald');
