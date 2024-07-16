import { Book } from './Book';
import { DigitalBookFormat, BookDetails } from './Types';

export class DigitalBook extends Book {
  format: DigitalBookFormat;
  fileSize: number;

  constructor(
    bookDetails: BookDetails,
    format: DigitalBookFormat,
    fileSize: number
  ) {
    super(bookDetails);
    this.format = format;
    this.fileSize = fileSize;
  }

  get getFormat(): DigitalBookFormat {
    return this.format;
  }

  set setFormat(input: DigitalBookFormat) {
    if ((<any>Object).values(DigitalBookFormat).includes(input)) {
      this.format = input;
    } else {
      console.log(`ERROR: Invalid format!`);
    }
  }

  get getFileSize(): number {
    return this.fileSize;
  }

  set setFileSize(input: number) {
    if (input > 0) {
      this.fileSize = input;
    } else {
      console.log(`ERROR: Invalid file size!`);
    }
  }

  getBookDetails(): BookDetails {
    return {
      ...super.getBookDetails(),
      format: this.format,
      fileSize: this.fileSize,
    };
  }
}
