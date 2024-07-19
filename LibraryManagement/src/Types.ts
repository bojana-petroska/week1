export enum Genre {
  fiction = 'Fiction',
  nonFiction = 'Non-Fiction',
  science = 'Science',
  biography = 'Biography',
  poetry = 'Poetry'
}
export interface BookDetails {
  title: string;
  author: string;
  publishedYear: number;
  genre: Genre;
}
export interface LibraryDetails {
  name: string;
  address: string;
}

export enum DigitalBookFormat {
  pdf = 'PDF',
  epub = 'EPUB',
  mobi = 'MOBI',
  audio = 'AUDIO',
}
export interface DigitalBookDetails extends BookDetails {
  fileSize: number;
  format: DigitalBookFormat;
}
export interface AudioBookDetails extends DigitalBookDetails {
  duration: number;
  narrator: string;
}
