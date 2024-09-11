import { Schema, model } from "mongoose";

interface IBook {
  title: string;
  author: string;
  releaseDate: Date;
  genre?:
    | "fiction"
    | "non-fiction"
    | "fantasy"
    | "sci-fi"
    | "horror"
    | "thriller"
    | "mystery"
    | "romance"
    | "historical"
    | "biography";
}

const bookSchema = new Schema<IBook>({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  genre: {
    type: String,
    enum: [
      "fiction",
      "non-fiction",
      "fantasy",
      "sci-fi",
      "horror",
      "thriller",
      "mystery",
      "romance",
      "historical",
      "biography",
    ],
  },
});

const Book = model<IBook>("Book", bookSchema);

export default Book;
