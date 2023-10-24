 import { authors, books, genres, BOOKS_PER_PAGE } from './data.js';

// // THIS CODE DEALS WITH HOW THE BOOKS ARE DISPLAYED IN THE DOM

const dataListItems = document.querySelector('[data-list-items]') // The books loaded in the preview created
const bookList = books
const range = [0, BOOKS_PER_PAGE]

let startIndex = range[0] // Sets the start index to 0
let endIndex = startIndex + BOOKS_PER_PAGE // Sets the end index to 0 (start range) + the value of BOOKS_PER_PAGE

//let bookList = books // Sets bookList to the books array from data.js
 let x = 0; // Define the initial start index
 let y = BOOKS_PER_PAGE; // Define the initial end index
// let increment = BOOKS_PER_PAGE; // Define how many more books to load each time

export function displayBooksList(DomAppend, bookList, startIndex, endIndex) {
  const fragment = document.createDocumentFragment(); 
  
  // Loop through the bookList within the specified range
  for (let i = startIndex; i < endIndex && i < bookList.length; i++) {
      const { author, image, title, id } = bookList[i]; // Destructuring to create bookList[i]
      let element = document.createElement('button'); // Create a clickable button which will be the book preview
      element.classList = 'preview'; 
      element.setAttribute('data-preview', id);
      element.innerHTML = /* html */ // Creates the content for the button including the relating image, title and author of each book
          `<img
              class="preview__image"
              src="${image}" 
          />
          <div class="preview__info">
              <h3 class="preview__title">${title}</h3>
              <div class="preview__author">${authors[author]}</div>
          </div>`;
      
      fragment.appendChild(element); // Appends the fragment to contain the button
  }
  
  DomAppend.appendChild(fragment); // Appends the actual webpage to contain the fragment with the button we just created
}
displayBooksList(dataListItems, bookList, x, y); // Initial display of books


// class BookDisplayManager {
//     constructor(DomAppend, authors) {
//       this.DomAppend = DomAppend;
//       this.authors = authors;
//     }
  
//     createBookElement(book) {
//       const element = document.createElement('button');
//       element.classList = 'preview';
//       element.setAttribute('data-preview', book.id);
//       element.innerHTML = /* html */
//         `<img class="preview__image" src="${book.image}" />
//          <div class="preview__info">
//              <h3 class="preview__title">${book.title}</h3>
//              <div class="preview__author">${this.authors[book.author]}</div>
//          </div>`;
//       return element;
//     }
  
//     displayBooks(bookList, startIndex, endIndex) {
//       const fragment = document.createDocumentFragment();
  
//       for (let i = startIndex; i < endIndex && i < bookList.length; i++) {
//         const book = bookList[i];
//         const element = this.createBookElement(book);
//         fragment.appendChild(element);
//       }
  
//       this.DomAppend.appendChild(fragment);
//     }
//   }
  
// export {BookDisplayManager}