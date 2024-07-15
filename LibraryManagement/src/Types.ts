export type Genre = 'Fiction' | 'Non-Fiction' | 'Science' | 'Biography' | 'Poetry';

export interface BookDetails {
    title: string,
    author: string,
    publishedYear: number,
    genre: Genre
}

export interface LibraryDetails {
    name: string;
    address: string;
  }

console.log('bo');