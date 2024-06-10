import { Review } from "./interfaces";

// Classes
export class MainProperty {
    src: string;
    title: string;
    reviews: Review[];
    constructor(src: string, title: string, reviews: Review[]) {
      this.src = src;
      this.title = title;
      this.reviews = reviews;
    }
  }