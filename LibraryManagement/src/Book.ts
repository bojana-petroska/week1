import { Genre, BookDetails } from './Types';

export class Book {
  private _title: string;
  private _author: string;
  private _publishedYear: number;
  private _genre: Genre;

  constructor(bookDetails: BookDetails) {
    this._title = bookDetails.title;
    this._author = bookDetails.author;
    this._publishedYear = bookDetails.publishedYear;
    this._genre = bookDetails.genre;
  }

  get title(): string {
    return this._title;
  }

  set title(input: string) {
    if (input.length >= 0) {
      this._title = input;
    } else {
      console.log(`wrong input`);
    }
  }

  get author(): string {
    return this._author;
  }

  set author(input: string) {
    if (input.length >= 0) {
      this._author = input;
    } else {
      console.log(`wrong input`);
    }
  }

  get publishedYear(): number {
    return this._publishedYear;
  }

  set publishedYear(input: number) {
    if (input !== undefined && input > 0) {
      this._publishedYear = input;
    } else {
      console.log(`wrong input`);
    }
  }

  get genre(): string {
    return this._genre;
  }

  set genre(input: Genre) {
    if (['Fiction', 'Non-Fiction', 'Science', 'Biography', 'Poetry'].includes(input)) {
      this._genre = input;
    } else {
      console.log(`wrong input`);
    }
  }

  getBookDetails(): BookDetails {
    return {
      title: this._title,
      author: this._author,
      publishedYear: this._publishedYear,
      genre: this._genre,
    };
  }
}

const newBook = new Book({
    title: 'Longing for the South',
    author: 'Konstantin Miladinov',
    publishedYear: 1860,
    genre: 'Poetry'
});

console.log(newBook.getBookDetails());
