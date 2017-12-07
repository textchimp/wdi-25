/*
The Reading List

Keep track of which books you read and which books you want to read!

Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
*/

let books = [
  {
    title: "The Hitch-Hiker's Guide to Galaxy",
    author: 'Douglas Adams',
    alreadyRead: true
  },
  {title: 'Gödel, Escher, Bach', author: 'Douglas Hofstadter', alreadyRead: true },
  {title: 'Ulysses', author: 'James Joyce', alreadyRead: false}
];

for (let i = 0; i < books.length; i++) {
  let currentBook = books[i];
  let readString = '';
  if( currentBook.alreadyRead ){
    readString = 'You already read';
  } else {
    readString = 'You still need to read'
  }
  console.log(`${readString} ${currentBook.title} by ${currentBook.author}`);

}
