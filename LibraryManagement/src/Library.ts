import { Genre, BookDetails } from './Types';
import { Book } from './Book';
import { LibraryDetails } from './Types';

class Library {
  private _name: string;
  private _address: string;
  private _books: Book[];

  constructor(libraryDetails: LibraryDetails) {
    this._name = libraryDetails.name;
    this._address = libraryDetails.address;
    this._books = [];
  }

  addBook(bookDetails: BookDetails): void {
    const newBook = new Book(bookDetails);
    this._books.push(newBook);
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

library1.addBook({
  title: 'Longing for the South',
  author: 'Konstantin Miladinov',
  publishedYear: 1860,
  genre: 'Poetry',
});

console.log('Library before removing the book:');
console.log(library1.getBooks());

library1.removeBook('Longing for the South');

console.log('Library after removing the book:');
console.log(library1.getBooks());