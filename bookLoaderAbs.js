import { authors, books, genres, BOOKS_PER_PAGE } from './data.js';
import { displayBooksList} from './bookDisplayAbs.js';

const dataListButton = document.querySelector('[data-list-button]') // The 'Show More' button
const dataListItems = document.querySelector('[data-list-items]') // The books loaded in the preview created
const bookList = books

/**
 * The code below (excluding the code commented out at the end of this document) is a mixture between my original code which actually
 * had good abtraction initially by having separate functions for each small purpose, 
 * and a slightly new twist on it with my new DWA6+7 knowledge.
 */

/**
 * The amount of books that are left to load after the first page load.
 * This is before clicking on the 'Show more' button, where it is updated in a later function.
 */
let remainingBooks = books.length- BOOKS_PER_PAGE // Gets the original number of books in the data.js file

/**
 * SHOW MORE BUTTON CODE REGARDING TEXT AND FUNCTIONALITY
 * Adding "Show more" text onto the button that updates the remaining number every time it is clicked
 */
dataListButton.innerText = `Show more (${remainingBooks})` // Displays the number of books available to load

/** 
 * A function that updates the dataListButton text after each time the 'Show more' button is clicked
 */ 
function updateShowMore () {
  if (remainingBooks >= BOOKS_PER_PAGE || remainingBooks > 0)
    dataListButton.innerText = `Show more (${remainingBooks})`
}

/**
 * A function that checks to see if there are <= 0 books left to load and then 
 * disables the 'Show more' button if that statement is true
 */ 
function checkButtonStatus() {
    if (remainingBooks <= 0) {
        loadMoreBooks()
      dataListButton.disabled = true; // Disable the button
    } else {
      dataListButton.disabled = false; // Enable the button
    }
  }

/**
 * A function that updates the remaining books value each time dataListButton is clicked
 */
function updateRemaining () {
  remainingBooks -= BOOKS_PER_PAGE;

if (remainingBooks <= 0) { 
dataListButton.innerText = `Show more (0)` // Sets remaining books to 0 so a user knows there is nothing more to load 
dataListButton.disabled = true
}
updateShowMore(); // Calls this function again to update it each time the button is clicked
checkButtonStatus() // Checks to see if the button is active or disabled after each click 
}

export { updateRemaining }


 let x = 0; // Define the initial start index
 let y = BOOKS_PER_PAGE; // Define the initial end index
 let increment = BOOKS_PER_PAGE; // Define how many more books to load each time
 
/**
 * A function that allows more books to be loaded with the correct incrementation each time 
 */ 
function loadMoreBooks() {
  // Update the start and end indices for the next batch of books
  x = y; // Move the start index to the previous end index
  y += increment; // Increase the end index by the increment value

  //new BookDisplayManager(dataListItems,books, x, y)
 displayBooksList(dataListItems, bookList, x, y); // Display the next batch of books

  // Check if there are more books to load
  if (y >= bookList.length) {
      updateShowMore(),
      updateRemaining()
      // Hide the "Load More" button if all books are loaded
      dataListButton.disabled = true;
  }
}

export { loadMoreBooks }


// The below is my previous abstraction code for loading more books (DWA6)
// THIS DEALS WITH LOADING MORE BOOKS ON THE PAGE WHEN THE SHOW MORE BUTTON IS CLICKED

//  class BookLoader {
//     constructor(books, dataListButton, dataListItems, displayFunction, increment) {
//       this.books = books;
//       this.dataListButton = dataListButton;
//       this.dataListItems = dataListItems;
//       this.displayFunction = displayFunction;
//       this.increment = increment;
//       this.startIndex = 0;
//       this.endIndex = increment;
//       this.remainingBooks = books.length - increment;
  
//       this.setupButton();
//       this.attachEventHandlers();
//     }
  
//     setupButton() {
//       this.updateShowMore();
//       this.checkButtonStatus();
//     }
  
//     updateShowMore() {
//       this.dataListButton.innerText = `Show more (${this.remainingBooks})`;
//     }
  
//     checkButtonStatus() {
//       this.dataListButton.disabled = this.remainingBooks <= 0;
//     }
  
//     loadMoreBooks() {
//         this.startIndex = this.endIndex;
//         this.endIndex += this.increment;
    
//         this.displayFunction(this.books, this.startIndex, this.endIndex);
    
//         if (this.endIndex >= this.books.length) {
//           this.remainingBooks = 0;
//           this.updateShowMore();
//           this.dataListButton.disabled = true;
//         } else {
//           this.remainingBooks = this.books.length - this.endIndex;
//           this.updateShowMore();
//           this.checkButtonStatus();
//         }
//     }
  
//     attachEventHandlers() {
//       this.dataListButton.addEventListener('click', () => this.loadMoreBooks());
//     }
//   }

//   export {BookLoader}