export type Genre = 'Fiction' | 'Non-Fiction' | 'Science' | 'Biography' | 'Poetry';

export interface BookDetails {
    title: string,
    author: string,
    publishedYear: number,
    genre: Genre,
    format?: DigitalBookFormat;
    fileSize?: number;
    duration?: number,
    narrator?: string
}

export interface LibraryDetails {
    name: string;
    address: string;
  }

export enum DigitalBookFormat {
  pdf = 'PDF', 
  epub = 'EPUB', 
  mobi = 'MOBI', 
  audio = 'AUDIO'
}

