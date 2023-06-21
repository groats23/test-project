код: 1 index.html: <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>BookShelf</title>
    <include src="./partials/favicon.html"></include>
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/1.1.0/modern-normalize.min.css"
      rel="stylesheet"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,700;1,400&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./sass/index.scss" />
    <link rel="stylesheet" href="./css/styles.css" />
  </head>

  <body>
    <header>
      <include src="./partials/header.html"></include>
    </header>
    <!-- тимчасова кнопка для тестування модалки -->
    <button class="button" data-modal-open>open modal</button>
    <main>
      <div class="container">
        <aside class="site-bar">
          <include src="./partials/category.html"></include>
          <include src="./partials/slider.html"></include>
        </aside>
        <include src="./partials/modal-window.html"></include>
        <include src="partials/home-page.html"></include>
      </div>
    </main>

    <script type="module" src="./index.js"></script>
    <script type="module" src="./shopping-list.js"></script>
    <script type="module" src="./js/shopping-list-index.js"></script>
  </body>
</html>
2 shopping-list.html: <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Shopping List</title>
    <include src="./partials/favicon.html"></include>
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/1.1.0/modern-normalize.min.css"
      rel="stylesheet"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,700;1,400&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./sass/index.scss" />
    <link rel="stylesheet" href="./css/styles.css" />
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
  </head>
  <body>
    <header>
      <include src="./partials/header.html"></include>
    </header>
    <main>
      <div class="flex-container-shopping">
        <div class="support-ukraine">
          <aside class="site-bar">
            <include src="./partials/slider.html"></include>
          </aside>
        </div>

        <section class="shopping-list">
          <div class="container-shop">
            <h1 class="shopping-list__title">
              Shopping <span class="part-two">List</span>
            </h1>
            <div class="screen-saver js-screen-saver">
              <p class="text-saver">
                This page is empty, add some books and proceed to order.
              </p>
              <div class="pile-books">
                <img
                  srcset="
                    images/shopping-list-empty-bg/shoping-list-empty-mobile_sm.png    265w,
                    images/shopping-list-empty-bg/shoping-list-empty_lg.png           320w,
                    images/shopping-list-empty-bg/shoping-list-empty-mobile_sm-2x.png 530w,
                    images/shopping-list-empty-bg/shoping-list-empty_lg-2x.png        644w
                  "
                  sizes="(max-width: 768px) 265px,320px,644px"
                  src="images/shopping-list-empty-bg/shoping-list-empty_lg-2x.png"
                  alt="Book Illustration"
                />
              </div>
            </div>
            <ul class="list js-container-list-shop container-list-shop"></ul>
            <!-- <include src="./partials/pagination.html"></include> -->
          </div>
        </section>
      </div>
    </main>
    <include src="./partials/pagination.html"></include>

    <script type="module" src="./index.js"></script>
    <script type="module" src="./shopping-list.js"></script>
    <script type="module" src="./js/shopping-list-index.js"></script>
  </body>
</html>
3 index.js: import './js/book-card.js';
import './js/books-service.js';
import './js/dark-theme.js';
import './js/fonds-info.js';
import './js/modal-window.js';
import './js/slider.js';
import './js/category.js'; 4  shopping-list.js: import './js/slider.js';
import './js/pagination.js';
import './js/shopping-list-index.js';
5. category.html: <div class="category"></div>
6. <article class="example" id="uk">
  <h1>HTML-partials</h1>

  <!--
    ❗️❗️❗️ The path to images from the HTML partial
    is the same as from the index.html file
  -->
  <img src="images/logo.png" alt="" width="320" />

  <p>
    The
    <a
      href="https://github.com/posthtml/posthtml-include"
      target="_blank"
      rel="noopener noreferrer"
    >
      posthtml-include
    </a>
    plugin allows you to add code from other HTML files (fragments) to HTML page
    files. Fragments are stored in the <code>src/partials</code> folder. The
    addition occurs when compiling page files, such as <code>index.html</code>.
  </p>

  <p>
    This <code>example.html</code> file is an example of such a snippet, with
    the markup of a certain part of the main page. This is very convenient for
    team development on student projects, when several people write in one HTML
    file at once.
  </p>

  <p>
    The syntax for adding a fragment to the main file is:
    <code> &lt;include src="./partials/filename.html"&gt;&lt;/include&gt;</code>
  </p>

  <div class="background"></div>
</article>
7. favicon.html: <link
  rel="apple-touch-icon"
  sizes="180x180"
  href="images/favicon/apple-touch-icon.png"
/>
<link
  rel="icon"
  type="image/png"
  sizes="32x32"
  href="images/favicon/favicon-32x32.png"
/>
<link
  rel="icon"
  type="image/png"
  sizes="16x16"
  href="images/favicon/favicon-16x16.png"
/>
<link rel="manifest" href="images/favicon/site.webmanifest" />
<link
  rel="mask-icon"
  href="images/favicon/safari-pinned-tab.svg"
  color="#4f2ee8"
/>
<meta name="msapplication-TileColor" content="#4f2ee8" />
<meta name="theme-color" content="#4f2ee8" />
8. home-page.html: <section class="top-books-section">
  <div class="container-books-card">
    <h2 class="title-best-sellers">
      Best sellers <span class="title-best-sellers-part">books</span>
    </h2>
    <ul class="top-books"></ul>
  </div>
</section>
9. modal-window.html: <div class="backdrop is-hidden" data-modal>
  <div class="modal">
    <button class="modal-close" data-modal-close>
      <svg class="modal-icon" width="24" height="24">
        <use href="/src/images/sprite.svg#x-close"></use>
      </svg>
    </button>
    <button class="modal-btn" type="button">
      <p class="text-btn">add to shopping list</p>
    </button>
  </div>
</div> 10. pagination.html: <div id="tui-pagination-container" class="tui-pagination"></div>
11. slider.html: <div class="slider-swiper">
  <div class="slider-swiper__title">
    <h2 class="slider-swiper__text">Support Ukraine</h2>
    <svg class="slider-swiper__icon" width="20" height="32">
      <use href="/src/images/sprite.svg#gerb"></use>
    </svg>
  </div>

  <div class="swiper-container">
    <div class="swiper-wrapper"></div>

    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</div>
12. switch-dark-theme.html: <input class="input-switch" type="checkbox" id="switch" />
<label class="lable-switch" for="switch">Toggle</label>
Тепер файли JS: 13. book-card.js: import { BooksService } from './books-service';
import Notiflix from 'notiflix';

const booksService = new BooksService();
const listTopBooks = document.querySelector('.top-books');

let markup = '';


async function renderBooksCategories() {
  try {
    const { data } = await booksService.fetchTopBooks();
    return data;
  } catch (error) {
    console.log(error);
    Notiflix.Notify.failure('Oops! Something went wrong... Please try again.');
  }
}

const updateBooksCategories = async () => {
  const categories = await renderBooksCategories();
  let numBooksToShow = 5;

  if (window.innerWidth < 768) {
    numBooksToShow = 1;
  } else if (window.innerWidth < 1440) {
    numBooksToShow = 3;
  } else {
    numBooksToShow = 5;
  }

  markup = '';

  for (let i = 0; i < categories.length; i += 1) {
    const { list_name, books } = categories[i];

    let categoryMarkup = `
      <li>
        <h3 class="name-category">${list_name}</h3>
        <ul class="list-category">
    `;

    for (let j = 0; j < numBooksToShow && j < books.length; j += 1) {
      const { _id, book_image, title, author } = books[j];

      categoryMarkup += `
        <li class="item-category-book js-book-modal" data-book-id="${_id}">
          <a class="link-books" href="#">
            <div class="card-book">
              <div class="img-card-book">
                <img src="${book_image}" alt="book" class="img-book" loading="lazy" onerror="src='${new URL(
        '../images/plug-empte-book_335x485.png',
        import.meta.url
      )}'"/>
              </div>
              <div class="bestsellers-text-wrapper">
                <div class="title-wrap">
                  <p class="book-title">${title}</p>
                </div>
                <div class="author-wrap">
                  <p class="book-author">${author}</p>
                </div>
              </div>
            </div>
          </a>
        </li>
      `;
    }

    categoryMarkup += `
        </ul>
        <button type="button" aria-label="See more" class="see-more">See more</button>
      </li>
    `;

    markup += categoryMarkup;
  }

  if (listTopBooks) {
    listTopBooks.innerHTML = '';
    listTopBooks.insertAdjacentHTML('beforeend', markup);
    //======= Дашин код ==============
    const seeMoreBtns = document.querySelectorAll('.see-more');
    const categoriesForBtn = document.querySelectorAll('.bookcat');

    for (let p = 0; p < categories.length; p++) {
      seeMoreBtns[p].addEventListener('click', () => {
        categoriesForBtn[p + 1].click();
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      });
    }
    //======= /Дашин код ==============
  }
};

window.addEventListener('resize', updateBooksCategories);

// Initial rendering
updateBooksCategories();
14. books-service.js: import axios from 'axios';

export class BooksService {
  #BASE_URL = 'https://books-backend.p.goit.global/books/';
  fetchTopBooks() {
    return axios
      .get(`${this.#BASE_URL}/top-books`)
      .then(response => response)
      .catch(console.error);
  }
}
15. category.js: import axios, { all } from 'axios';
import Notiflix from 'notiflix';

// вибираєм головний контейнер в category html
const asideList = document.querySelector('.category');
// вибираєм головний контейнер в home page html
const homePageContainer = document.querySelector('.container-books-card');
//вибираєм список результатів пошуку книжок по категоріям

const listStructure = `<ul class="categBook"></ul>`;

// додаємо ул в дів
asideList.insertAdjacentHTML('beforeend', listStructure);
// вибираємо ул
const listOfCateg = document.querySelector('.categBook');

//створюємо функцію, яка викликає запити по катекорії
async function getBooksByCategory(categoryName) {
  homePageContainer.innerHTML = '';
  try {
    const responseCategoty = await axios.get(
      `https://books-backend.p.goit.global/books/category?category=${categoryName}`
      );
      const dataFile = responseCategoty.data;
      
      //створюємо заголовок вибраної категорії
      const selectedCatName = document.createElement('h2');
      selectedCatName.classList.add('selected-category-name');
      const words = categoryName.split(' ');
      const lastWordOfCategory = words.pop();
      const cuttedNameOFCategory = words.join(' ');
      selectedCatName.innerHTML = `${cuttedNameOFCategory} <split class="last-word-category">${lastWordOfCategory}</split>`;


    homePageContainer.appendChild(selectedCatName);
    //створюємо новий список
    const newCategoryList = document.createElement('ul');
    newCategoryList.classList.add('selected-category');
    homePageContainer.appendChild(newCategoryList);
    const newBookUl = document.querySelector('.selected-category');
    //створюємо нові результати пошуку і заповняєм список результатів
    dataFile.forEach(bookRes => {
      const newBookLI = document.createElement('li');
      newBookLI.classList.add('book-card-preview');
      const bookFace = `<div class="book-image">
                          <img src="${bookRes.book_image}">
                        </div>
                        <div>
                          <h2 class="book-title">${bookRes.title}</h2>
                          <p class="book-author">${bookRes.author}</p>
                        </div>`;
      newBookLI.innerHTML = bookFace;
      newBookUl.appendChild(newBookLI);
    });
  } catch (error) {
    console.log(error);
  }
}

// створюємо функцію, яка буде викликати всі категорії з сервера. Результат роботи цієї функції
// це заповнене бокове меню з вибором категорій книг і встановлений слухач на елементи списка
async function getCategoryList() {
  try {
    const response = await axios.get(
      'https://books-backend.p.goit.global/books/category-list'
    );
    const data = response.data;
    const sortedData = data.sort((a, b) => a.list_name.localeCompare(b.list_name));
    
    
    const allCategories = document.createElement('li');
    allCategories.classList.add('bookcat');
    allCategories.classList.add('allBooks');
    allCategories.textContent = 'All categories';
    listOfCateg.appendChild(allCategories);
    const allCatPoint = document.querySelector('.allBooks');
    allCatPoint.addEventListener('click', ()=>{window.location.href = 'index.html'})
    
    sortedData.forEach(category => {
      //створюю елемент списку категорій
      const newLICateg = document.createElement('li');
      newLICateg.classList.add('bookcat');
      listOfCateg.appendChild(newLICateg);
      newLICateg.innerHTML = category.list_name;

      newLICateg.addEventListener('click', () => {
        //тут виправити нижче
        getBooksByCategory(category.list_name);
      });
    });
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener('load', getCategoryList);

// 

16. fonds-info.js: 
const fondsInfo = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: new URL('../images/funds/save-children.png', import.meta.url),
    },

  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: new URL('../images/funds/project-hope.png', import.meta.url),
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: new URL('../images/funds/international-medical-corps.png', import.meta.url),
  },

  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: new URL('../images/funds/razom.png', import.meta.url),
  },

  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: new URL('../images/funds/action-against-hunger.png', import.meta.url),
  },

  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: new URL('../images/funds/sergiy-prytula.png', import.meta.url),
  },

  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: new URL('../images/funds/united24.png', import.meta.url),
  },

  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: new URL('../images/funds/medecins-sans.png', import.meta.url),
  },

  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: new URL('../images/funds/world-wision.png', import.meta.url),
  }
];

export default fondsInfo; 17.  handleScroll.js: export default function handleScroll() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    fetchImages(); // заменить эту функцию на свою
  }
}
window.addEventListener('scroll', handleScroll);
18. modal-window.js: (() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.modal.addEventListener('click', logBackdropClick);
 

  function toggleModal() {
    //   const isModalOpen =
    //     refs.openModalBtn.getAttribute('aria-expanded') === 'true' || false;
    //   refs.openModalBtn.setAttribute('aria-expanded', !isModalOpen);
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle('is-hidden');
    document.addEventListener('keydown', logBackdropClick);
  

    //   const scrollLockMethod = !isModalOpen
    //     ? 'disableBodyScroll'
    //     : 'enableBodyScroll';
    //   bodyScrollLock[scrollLockMethod](document.body);
  };
  function logBackdropClick(e) {
    if (e.target.className==="backdrop"||e.code==="Escape"){
      refs.modal.classList.add('is-hidden');
      document.body.classList.remove("modal-open");
      document.removeEventListener('keydown', logBackdropClickn);
    } else
    console.log('эток клик в бекдроп'); 
console.log("key",e.key);
console.log("code",e);
  }
})();
19. pagination.js: import Pagination from 'tui-pagination';

const container = document.getElementById('tui-pagination-container');
const options = {
  totalItems: 500,
  itemsPerPage: 10,
  visiblePages: 2,
};
const pagination = new Pagination(container, options);

pagination.getCurrentPage();
20. slider.js: 
import Swiper, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';
import fondsInfo from './fonds-info.js';

Swiper.use([Navigation]);

document.addEventListener('DOMContentLoaded', generateSlides);


function generateSlides() {

  const isMobile = window.innerWidth < 768;
  const slidesPerView = isMobile ? 4 : 6;

  let allSlides;

  if (fondsInfo.length > slidesPerView * 2) {
    allSlides = fondsInfo;
  } else {
    allSlides = [...fondsInfo, ...fondsInfo];
  }

  let swiper;

  function updateSlider() {
    if (swiper) {
      swiper.update();
    }
  }

  function handleResize() {
    updateSlider();
  }

  const swiperOptions = {
    direction: 'vertical',
    loop: true,
    slidesPerView: slidesPerView,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  swiper = new Swiper('.swiper-container', swiperOptions);

  allSlides.forEach((slide, index) => {

    const originalIndex = index % fondsInfo.length;

    const slideHTML = `
      <div class="swiper-slide">
        <div class="slide__content">
          <div class="slide__number">${(originalIndex + 1)
            .toString()
            .padStart(2, '0')}</div>
          <a href="${slide.url}" class="slider__link" target="_blank">
            <img
            src="${slide.img}"
            alt="${slide.title}"
            class="slider__png">
          </a>
        </div>
      </div>
    `;
    document
      .querySelector('.swiper-wrapper')
      .insertAdjacentHTML('beforeend', slideHTML);
  });

  updateSlider();

  window.addEventListener('resize', handleResize);
}

І є останній файл JS shopping-list-index.js, він пустий. подивись код, а я формую питання до тебе і напище зарас.