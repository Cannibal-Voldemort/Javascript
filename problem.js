/*1. Create a array of books where book is a object with properties id,title,author,price(in rs)
  2. Write functions to perform CRUD operations on this array (Create Read Update Delete)
     a. A function to get all books based on the author we provide to this function
     b. A function to update any book details based on its id
     c. A function to get details of any book based on its id
     d. A function to get All Books in descending order of its price
*/
let books = [
    {
        id: 1,
        title: "naruto",
        author: "aman",
        price: 234,
      },
      {
        id: 2,
        title: "how i met your mother",
        author: "aman",
        price: 1200,
      },
      {
        id: 3,
        title: " fifty shades of grey",
        author: "aman",
        price: 1000,
      },
      {
        id: 4,
        title: "reproductive organs",
        author: "harsh",
        price: 300,
      },
      {
        id: 5,
        title: "iq option",
        author: "harsh",
        price: 150,
      },
      {
        id: 6,
        title: "ironman",
        author: "harsh",
        price: 500,
      },
    ];

function getBooksByAuthor(authorName) {
  return books.filter((book) => book.author === authorName);
}
function updateBookDetails(bookId, newDetails) {
  const index = books.findIndex((book) => book.id === bookId);
  if (index !== -1) {
    books[index] = { ...books[index], ...newDetails };
    return true;
  }
  return false;
}

function getBookDetails(bookId) {
  return books.find((book) => book.id === bookId);
}

function getAllBooksDescendingByPrice() {
  return books.slice().sort((a, b) => b.price - a.price);
}

console.log("All books by aman:", getBooksByAuthor("aman"));
console.log("Details of Book with id 2:", getBookDetails(2));
console.log("Updating Book with id 3:", updateBookDetails(3, { price: 130 }));
console.log(
  "All books in descending order of price:",
  getAllBooksDescendingByPrice()
);
