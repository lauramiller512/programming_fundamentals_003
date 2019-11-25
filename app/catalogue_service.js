//eslint-disable-next-line no-unused-vars

const catalogue = [
  { title: "Dracula", author: "Bram Stoker", quantity: 0 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", quantity: 10 },
  { title: "Between the Assassinations", author: "Aravind Adiga", quantity: 9 },
  { title: "Wolf Hall", author: "Hilary Mantel", quantity: 33 },
  { title: "Bring Up The Bodies", author: "Hilary Mantel", quantity: 31 },
  { title: "A Place of Greater Safety", author: "Hilary Mantel", quantity: 11 },
  { title: "Giving Up the Ghost", author: "Hilary Mantel", quantity: 8 },
  { title: "The Assassination of Margaret Thatcher", author: "Hilary Mantel", quantity: 43 },
  { title: "The Yellow Wallpaper", author: "Charlotte Perkins Gilman", quantity: 12 },
  { title: "Conversations With Friends", author: "Sally Rooney", quantity: 1 },
  { title: "Normal People", author: "Sally Rooney", quantity: 2 },
  { title: "Everything I Never Told You", author: "Celeste Ng", quantity: 6 },
  { title: "2666", author: "Robert Bolaño", quantity: 17 },
  { title: "The Origin of Species", author: "Charles Darwin", quantity: 50 },
  { title: "Why Be Happy When You Could Be Normal?", author: "Jeanette Winterson", quantity: 19 },
  { title: "The Blind Assassin", author: "Margaret Atwood", quantity: 8 },
  { title: "Great Expectations", author: "Charles Dickens", quantity: 1 },
  { title: "Oliver Twist", author: "Charles Dickens", quantity: 7 },
  { title: "A Tale of Two Cities", author: "Charles Dickens", quantity: 3 },
  { title: "By Night In Chile", author: "Robert Bolaño", quantity: 8 }
]

function countBooksByAuthor(author) {
  let bookByAuthor = 0;
  for (let i = 0; i < catalogue.length; i++) {
    let book = catalogue[i];
    if (book.author === author) {
      bookByAuthor++;
    }
  } return bookByAuthor;
};

function checkBookByTitle(title) {
  for (let i = 0; i < catalogue.length; i++) {
    let book = catalogue[i];
    if (book.title === title) {
      return true;
    }
  } return false;

};


function countBooksByFirstLetter(letter) {
  let total = 0;
  for (let i = 0; i < catalogue.length; i++) {
    let book = catalogue[i];
    if (book.title.startsWith(letter.toUpperCase())) {
      total++;
    }
  } return total;
};



function getQuantity(title) {
  // Your code here
}

function getBooksByAuthor(author) {
  // Your code here
}

function checkQuantity(title, quantity) {
  // Your code here
}

module.exports = {
  countBooksByAuthor,
  checkBookByTitle,
  countBooksByFirstLetter,
  getQuantity,
  getBooksByAuthor,
  checkQuantity
};
