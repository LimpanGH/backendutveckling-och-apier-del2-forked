import express, { Request, Response } from "express";
import {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} from "../controllers/bookControllers";

const router = express.Router();

// GET /books
router.get("/books", (req: Request, res: Response) => {
  // Logic to fetch all books from the database
  const books = getBooks(req, res);
  res.send(books);
});

// GET /books/:id
router.get("/books/:id", (req: Request, res: Response) => {
  // Logic to fetch a book by id from the database
  const book = getBook(req, res);
  res.send(book);
});

// POST /books
router.post("/books", (req: Request, res: Response) => {
  // Logic to create a book in the database
  const newBook = createBook(req, res);
  res.send(newBook);
});

// PUT /books/:id
router.put("/books/:id", (req: Request, res: Response) => {
  // Logic to update a book by id in the database
  const updatedBook = updateBook(req, res);
  res.send(updatedBook);
});

// DELETE /books/:id
router.delete("/books/:id", (req: Request, res: Response) => {
  // Logic to delete a book by id from the database
  const deletedBook = deleteBook(req, res);
  res.send(deletedBook);
});

export default router;