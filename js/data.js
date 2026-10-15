// All the books in the library.
// To add a book, copy one line and change the details.
const books = [
  { id: 1,  title: "Pride and Prejudice",            author: "Jane Austen",          genre: "Romance",         year: 1813, color: "#a47e5b" },
  { id: 2,  title: "Jane Eyre",                      author: "Charlotte Brontë",     genre: "Romance",         year: 1847, color: "#8c6a4f" },
  { id: 3,  title: "1984",                           author: "George Orwell",        genre: "Science Fiction", year: 1949, color: "#6b4f3a" },
  { id: 4,  title: "Dune",                           author: "Frank Herbert",        genre: "Science Fiction", year: 1965, color: "#b88a5e" },
  { id: 5,  title: "Frankenstein",                   author: "Mary Shelley",         genre: "Science Fiction", year: 1818, color: "#7d5c44" },
  { id: 6,  title: "The Hobbit",                     author: "J.R.R. Tolkien",       genre: "Fantasy",         year: 1937, color: "#9a7b56" },
  { id: 7,  title: "A Wizard of Earthsea",           author: "Ursula K. Le Guin",    genre: "Fantasy",         year: 1968, color: "#c09a72" },
  { id: 8,  title: "Alice in Wonderland",            author: "Lewis Carroll",        genre: "Fantasy",         year: 1865, color: "#a88763" },
  { id: 9,  title: "The Murder of Roger Ackroyd",    author: "Agatha Christie",      genre: "Mystery",         year: 1926, color: "#5e4535" },
  { id: 10, title: "The Hound of the Baskervilles",  author: "Arthur Conan Doyle",   genre: "Mystery",         year: 1902, color: "#7a5a43" },
  { id: 11, title: "The Little Prince",              author: "Antoine de Saint-Exupéry", genre: "Children",    year: 1943, color: "#c4a07a" },
  { id: 12, title: "Charlotte's Web",                author: "E.B. White",           genre: "Children",        year: 1952, color: "#b5916b" },
  { id: 13, title: "Sapiens",                        author: "Yuval Noah Harari",    genre: "History",         year: 2011, color: "#8a6849" },
  { id: 14, title: "The Diary of a Young Girl",      author: "Anne Frank",           genre: "History",         year: 1947, color: "#6f5442" },
  { id: 15, title: "To Kill a Mockingbird",          author: "Harper Lee",           genre: "Classic",         year: 1960, color: "#9c7553" },
  { id: 16, title: "The Great Gatsby",               author: "F. Scott Fitzgerald",  genre: "Classic",         year: 1925, color: "#b08660" },
];

// The user's personal shelves (book ids from the list above).
const myBooks = {
  read:    [1, 3, 6, 11, 15],   // books already read
  now:     [4, 9],              // books borrowed right now
  ordered: [13, 7],             // ordered but not received yet
};

// Small helper: find a book by its id
function getBook(id) {
  return books.find(b => b.id === id);
}
