import { BookDetails, DigitalBookFormat, Genre, LibraryDetails } from './Types';
import { Book } from './Book';
import { DigitalBook } from './DigitalBook';
import { AudioBook } from './AudioBook'

class Library {
  private _name: string;
  private _address: string;
  private _books: Book[];

  constructor(libraryDetails: LibraryDetails) {
    this._name = libraryDetails.name;
    this._address = libraryDetails.address;
    this._books = [];
  }

  addBook(book: Book): void {
    this._books.push(book);
  }

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

library1.addBook(new Book({
  title: 'Longing for the South',
  author: 'Konstantin Miladinov',
  publishedYear: 1860,
  genre: Genre.poetry
}));

console.log('Library before removing the book:');
console.log(library1.getBooks());

library1.removeBook('Longing for the South');

console.log('Library after removing the book:');
console.log(library1.getBooks());

const digitalBook1 = new DigitalBook({ 
  title: 'Longing for the South',
  author: 'Konstantin Miladinov',
  publishedYear: 1860,
  genre: Genre.poetry,
  format: DigitalBookFormat.pdf,
  fileSize: 5
});

library1.addBook(digitalBook1);
console.log(library1.getBooks());

const audioBook1 = new AudioBook({ 
  title: 'Longing for the South',
  author: 'Konstantin Miladinov',
  publishedYear: 1860,
  genre: Genre.poetry,
  format: DigitalBookFormat.pdf,
  fileSize: 5,
  duration: 1,
  narrator: 'bo'
});

library1.addBook(audioBook1);
console.log(library1.getBooks());


