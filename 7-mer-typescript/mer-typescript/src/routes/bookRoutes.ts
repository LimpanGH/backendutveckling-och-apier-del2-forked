import express, { Request, Response } from "express";
import {
  getAllBooks,
  getBookById,
  createBook,
  deleteBookById,
  updateBookById,
} from "../controllers/bookController";

const router = express.Router();

// GET /books
router.get("/books", getAllBooks);

// GET /books/:id
router.get("/books/:id", getBookById);

// POST /books
router.post("/books", createBook);

// PUT /books/:id
router.put("/books/:id", deleteBookById);

// DELETE /books/:id
router.delete("/books/:id", updateBookById);

export default router;
