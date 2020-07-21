// 1. Little exercise from odin project
// function book(title, author, pages) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.printInfo = () => {
//     console.log(`${title} by ${author}, ${pages} pages.`);
//   };
// }

// const book1 = new book("The Hobbit", "J.R.R. Tolkien", 295);
// console.log(book1.printInfo());

// let head = {
//   glasses: 1,
//   __proto__: table,
// };

// let table = {
//   pen: 3,
//   __proto__: bed,
// };

// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__: pockets,
// };

// let pockets = {
//   money: 2000,
// };
const btn = document.querySelector("#submit-btn");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const root = document.querySelector("#root");
const showLibrary = document.querySelector("#show-library");
const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
let remove;
let para;

let myLibrary = [
  { title: "The Hobbit", author: "J.R.R Tolkien", read: true },
  {
    title: "Harry Potter and The Chamber of Secrets",
    author: "J.K Rowling",
    read: false,
  },
  {
    title: "Wind of Change",
    author: "Scorpions",
    read: true,
  },
];

function render() {
  let i = 0;
  for (book of myLibrary) {
    i++;
    root.innerHTML += `
    <p class='para' data-index="${i}">${i}.${book.title} ${book.author} ${book.read} <button class='remove' data-rmv="${i}">X</button></p>
  `;
  }
}

function Book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read;
  let book = { title: title, author: author, read: read };
  this.addBookToLibrary = () => {
    myLibrary.push(book);
  };
  this.clearRootOutput = () => {
    root.innerHTML = ``;
  };
  this.removeBook = () => {};
}

function readOrNot(yes) {
  return yes.checked ? true : false;
}

btn.addEventListener("click", () => {
  let read = readOrNot(yes);
  let book1 = new Book(title.value, author.value, read);
  book1.clearRootOutput();
  book1.addBookToLibrary();
});

showLibrary.addEventListener("click", () => {
  if (!root.innerHTML) {
    render();
    remove = root.querySelectorAll(".remove");
    para = root.querySelectorAll(".para");
    remove.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.classList.add("hide");
        let num = btn.dataset.rmv;
        para[num - 1].remove();
        if (myLibrary.length === 1) {
          myLibrary.pop();
        } else if (num - 1 === 0) {
          myLibrary.shift();
        } else if (num >= myLibrary.length) {
          myLibrary.pop();
        } else {
          myLibrary = myLibrary.slice(0, num).concat(myLibrary.slice(num + 1));
        }
      });
    });
  } else {
    root.innerHTML = ``;
  }
});
