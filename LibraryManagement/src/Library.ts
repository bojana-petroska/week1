import {
  BookDetails,
  DigitalBookDetails,
  DigitalBookFormat,
  Genre,
  LibraryDetails,
  AudioBookDetails,
} from './Types';
import { Book } from './Book';
import { DigitalBook } from './DigitalBook';
import { AudioBook } from './AudioBook';

class Library {
  private _name: string;
  private _address: string;
  private _books: Book[];

  constructor(libraryDetails: LibraryDetails) {
    this._name = libraryDetails.name;
    this._address = libraryDetails.address;
    this._books = [];
  }

  // Method overloading:
  addBook(book: Book): void;
  addBook(details: BookDetails): void;
  addBook(details: DigitalBookDetails): void;
  addBook(details: AudioBookDetails): void;
  // Actual implementation of AddBook
  addBook(bookOrDetails: Book | BookDetails | DigitalBookDetails | AudioBookDetails): void {
    if (bookOrDetails instanceof Book || bookOrDetails instanceof DigitalBook) {
      this._books.push(bookOrDetails);
    } else if ('format' in bookOrDetails) {
      if (bookOrDetails.format === 'AUDIO') {
        this._books.push(new AudioBook(<AudioBookDetails>bookOrDetails));
        console.log('QQQQQQ' + JSON.stringify(library1));
      } else {
        this._books.push(new DigitalBook(<DigitalBookDetails>bookOrDetails));
      }
    } else {
      this._books.push(new Book(bookOrDetails));
    }
  }

  // Old AddBook Method
  // addBook(book: Book): void {
  //   this._books.push(book);
  // }

  removeBook(title: string): string {
    const bookIndexToRemove = this._books.findIndex(
      (book) => book.title === title
    );
    if (bookIndexToRemove !== -1) {
      this._books.splice(bookIndexToRemove, 1);
      return `Removed book with title ${title}.`;
    } else {
      return `Book with title ${title} not found.`;
    }
  }

  getBooks(): BookDetails[] {
    return this._books.map((book) => book.getBookDetails());
  }
}

const library1 = new Library({
  name: 'vjkfb',
  address: 'bfbfb',
});

library1.addBook(
  new Book({
    title: 'Longing for the South',
    author: 'Konstantin Miladinov',
    publishedYear: 1860,
    genre: Genre.poetry,
  })
);

// console.log('Library before removing the book:');
// console.log(library1.getBooks());

//library1.removeBook('Longing for the South');

// console.log('Library after removing the book:');
// console.log(library1.getBooks());

const audioBook1 = new AudioBook({
  title: 'Longing for the South',
  author: 'Konstantin Miladinov',
  publishedYear: 1860,
  genre: Genre.poetry,
  format: DigitalBookFormat.pdf,
  fileSize: 5,
  duration: 1,
  narrator: 'bo',
});
library1.addBook(audioBook1);

const book = new Book({
  title: '1984',
  author: 'George Orwell',
  publishedYear: 1949,
  genre: Genre.fiction
});
library1.addBook(book);

const digitalBook = new DigitalBook({
  title: 'Digital Fortress',
  author: 'Dan Brown',
  publishedYear: 1998,
  genre: Genre.fiction,
  format: DigitalBookFormat.epub,
  fileSize: 5
});
library1.addBook(digitalBook);

const audioBook2 = new AudioBook({
  title: 'The Alchemist',
  author: 'Paulo Coelho',
  publishedYear: 1988,
  genre: Genre.fiction,
  format: DigitalBookFormat.audio,
  fileSize: 5,
  duration: 300,
  narrator: 'Jeremy Irons'
});
library1.addBook(audioBook2);

console.log(library1.getBooks());
//console.log(audioBook1)

