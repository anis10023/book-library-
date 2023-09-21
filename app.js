//Grab DOM elements
const myLibrary = [];
const addBook = document.querySelector("#addBook");
const bookDialog = document.querySelector("#bookDialog");
const title = bookDialog.querySelector("#title");
const author = bookDialog.querySelector("#author");
const pages = bookDialog.querySelector("#pages");
const cancelAddBook = bookDialog.querySelector("#cancelBtn");
const confirmBtn = bookDialog.querySelector("#confirmBtn");
const main = document.querySelector("main");
let readStatus = false;

//Event Listeners
addBook.addEventListener("click", (e) => {
  bookDialog.showModal();
});

bookDialog.addEventListener("close", (e) => {
  addBookToLibrary();
});

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  if (title.value === "" || author.value === "" || pages.value === "" || 0) {
    bookDialog.showModal();
  } else {
    bookDialog.close();
  }
});

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

Book.prototype.displayBook = function () {
  for (i = myLibrary.length; i > 0; i--) {
    if (i != myLibrary.length) {
      return;
    }

    const bookCard = document.createElement("div");

    const btnCancelBook = document.createElement("button");
    btnCancelBook.textContent = "X";
    btnCancelBook.addEventListener("click", (e) => removeBook());

    const title_p = document.createElement("p");
    title_p.innerHTML = `<strong style="color: #107ab0">Title: </strong>${this.title}`;

    const author_p = document.createElement("p");
    author_p.innerHTML = `<strong style="color: #107ab0">Author: </strong>${this.title}`;

    const pages_p = document.createElement("p");
    pages_p.innerHTML = `<strong style="color: #107ab0">Pages: </strong>${this.pages}`;

    main.appendChild(bookCard);

    bookCard.appendChild(btnCancelBook);
    bookCard.appendChild(title_p);
    bookCard.appendChild(author_p);
    bookCard.appendChild(pages_p);

    bookCard.dataset.index = myLibrary.length - 1;
    bookCard.classList.add("card");
    btnCancelBook.classList.add("btnCancelBook");

    readStatus();

    function removeBook() {
      myLibrary.splice(bookCard.dataset.index, 1);
      main.removeChild(bookCard);
    }

    function readStatus() {
      const isReadStatus = document.createElement("button");

      isReadStatus.textContent = "Not Finished";
      isReadStatus.classList.add("notReadStatus");

      isReadStatus.addEventListener("click", (e) => {
        isReadStatus.classList.toggle("readStatus");
        isReadStatus.classList.toggle("notReadStatus");

        if (isReadStatus.className === "readStatus") {
          isReadStatus.textContent = "Finished";
        } else {
          isReadStatus.textContent = "Not Finished";
        }
      });
      bookCard.appendChild(isReadStatus);
    }
  }
};

function addBookToLibrary() {
  if (title.value === "" || author.value === "" || pages.value === "" || 0) {
    return;
  }
  const newBook = new Book(title.value, author.value, pages.value);

  myLibrary.push(newBook);

  newBook.displayBook();

  document.querySelectorAll("input").forEach((element) => {
    element.value = "";
  });
}
