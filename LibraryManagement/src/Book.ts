import { AbstractBook } from './AbstractBook';
import { Genre, BookDetails } from './Types';

export class Book extends AbstractBook {

  constructor(details: BookDetails) {
    super(details);
  }

  getBookDetails(): BookDetails {
    return {
      title: this.title,
      author: this.author,
      publishedYear: this.publishedYear,
      genre: this.genre,
    };
  }
}

const newBook = new Book({
    title: 'Longing for the South',
    author: 'Konstantin Miladinov',
    publishedYear: 1860,
    genre: Genre.poetry
});

console.log(newBook.getBookDetails());
