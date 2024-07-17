import { Book } from './Book';
import { DigitalBookFormat, DigitalBookDetails } from './Types';

export class DigitalBook extends Book {
  private _format: DigitalBookFormat;
  private _fileSize: number;

  constructor(digitalBookDetails: DigitalBookDetails) {
    super(digitalBookDetails);
    this._format = digitalBookDetails.format;
    this._fileSize = digitalBookDetails.fileSize;
  }

  get format(): DigitalBookFormat {
    return this._format;
  }

  set format(newFormat: DigitalBookFormat) {
    if ((<any>Object).values(DigitalBookFormat).includes(newFormat)) {
      this._format = newFormat;
    } else {
      console.log(`ERROR: Invalid format!`);
    }
  }

  get fileSize(): number {
    return this._fileSize;
  }

  set fileSize(newFileSize: number) {
    if (newFileSize > 0) {
      this._fileSize = newFileSize;
    } else {
      console.log(`ERROR: Invalid file size!`);
    }
  }

  getBookDetails(): DigitalBookDetails {
    return {
      ...super.getBookDetails(),
      format: this._format,
      fileSize: this._fileSize,
    };
  }

}
