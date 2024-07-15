export type Genre = 'Fiction' | 'Non-Fiction' | 'Science' | 'Biography' | 'Poetry';

export interface BookDetails {
    title: string,
    author: string,
    publishedYear: number,
    genre: Genre
}

console.log('bo');