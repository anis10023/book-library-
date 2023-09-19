//Grab DOM elements
const myLibrary = [];
const addBook = document.querySelector("button");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const main = document.querySelector("main");

//Event Listeners
addBook.addEventListener("click", (e) => {
  addBookToLibrary();
});

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {
  if (title.value === "" || author.value === "" || pages.value === "" || 0) {
    return;
  }
  const newBook = new Book(title.value, author.value, pages.value);
  myLibrary.push(newBook);
  displayBook();
  document.querySelectorAll("input").forEach((element) => {
    element.value = "";
  });
}

function displayBook() {
  for (i = myLibrary.length; i > 0; i--) {
    if (i != myLibrary.length) {
      return;
    }

    const bookCard = document.createElement("div");

    const title_h3 = document.createElement("h3");
    title_h3.textContent = "Title: " + `${title.value}`;

    const author_h3 = document.createElement("h3");
    author_h3.textContent = "Author: " + `${title.value}`;

    const pages_h3 = document.createElement("h3");
    pages_h3.textContent = "Pages: " + `${pages.value}`;

    main.appendChild(bookCard);

    bookCard.appendChild(title_h3);
    bookCard.appendChild(author_h3);
    bookCard.appendChild(pages_h3);

    bookCard.classList.add("card");
  }
}

// [1,2,123]
