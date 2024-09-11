import { Schema, model } from "mongoose";

interface Book {
  title: string;
  author: string;
  releaseDate: Date;
  genre?:
    | "fiction"
    | "non-fiction"
    | "fantasy"
    | "sci-fi"
    | "thriller"
    | "mystery";
}

const bookSchema = new Schema<Book>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  genre: {
    type: String,
    enum: [
      "fiction",
      "non-fiction",
      "fantasy",
      "sci-fi",
      "thriller",
      "mystery",
    ],
  },
});

const BookModel = model<Book>("Book", bookSchema);

export default BookModel;
