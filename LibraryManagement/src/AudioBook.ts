import { DigitalBook } from './DigitalBook';
import { BookDetails, AudioBookDetails } from './Types';

export class AudioBook extends DigitalBook {
  private _duration: number;
  private _narrator: string;

  constructor(audioBookDetails: AudioBookDetails) {
    super(audioBookDetails);
    this._duration = audioBookDetails.duration;
    this._narrator = audioBookDetails.narrator;
    console.log(this._duration, this._narrator)
  }

  get getDuration(): number {
    return this._duration;
  }

  set setDuration(input: number) {
    if (input !== undefined && input > 0) {
      this._duration = input;
    } else {
      console.log(`wrong input`);
    }
  }

  get getNarrator(): string {
    return this._narrator;
  }

  set setNarrator(input: string) {
    if (input.length >= 0) {
      this._narrator = input;
    } else {
      console.log(`wrong input`);
    }
  }

  getBookDetails(): AudioBookDetails {
    console.log(this._duration, this._narrator)
    return {
      ...super.getBookDetails(),
      duration: this._duration,
      narrator: this._narrator,
    };
  }
}
