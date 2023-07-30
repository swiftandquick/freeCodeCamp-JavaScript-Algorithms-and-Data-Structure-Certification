// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList2, bookName) {
  const bookList3 = [...bookList2];
  bookList3.push(bookName);
  return bookList3;
  // Change code above this line
}

// Change code below this line
function remove(bookList2, bookName) {
  const bookList3 = [...bookList2];
  const book_index = bookList3.indexOf(bookName);
  if (book_index >= 0) {
    bookList3.splice(book_index, 1);
    return bookList3;
    // Change code above this line
    }
}

console.log(add(bookList, "A Brief History of Time"));

