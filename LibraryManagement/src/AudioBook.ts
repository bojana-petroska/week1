import { DigitalBook } from './DigitalBook';
import { DigitalBookFormat, BookDetails } from './Types';

class AudioBook extends DigitalBook {
  duration: number;
  narrator: string;

  constructor(
    bookDetails: BookDetails,
    format: DigitalBookFormat,
    fileSize: number,
    duration: number,
    narrator: string
  ) {
    super(bookDetails, format, fileSize);
    this.duration = duration;
    this.narrator = narrator;
  }

  get getDuration(): number {
    return this.duration;
  }

  set setDuration(input: number) {
    if (input !== undefined && input > 0) {
      this.duration = input;
    } else {
      console.log(`wrong input`);
    }
  }

  get getNarrator(): string {
    return this.narrator;
  }

  set setNarrator(input: string) {
    if (input.length >= 0) {
      this.narrator = input;
    } else {
      console.log(`wrong input`);
    }
  }

  getBookDetails(): BookDetails {
    return {
      ...super.getBookDetails(),
      duration: this.duration,
      narrator: this.narrator,
    };
  }
}
