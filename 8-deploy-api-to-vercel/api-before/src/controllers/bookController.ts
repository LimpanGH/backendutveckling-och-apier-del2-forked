import { Request, Response } from "express";
import Book from "../models/bookModel";

// Create a new book
export const createBook = async (req: Request, res: Response) => {
  try {
    const { title, author, genre, releaseDate } = req.body;
    const newBook = new Book({ title, author, releaseDate, genre });
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(500).json({ error: "Failed to create book" });
  }
};

// Get all books
export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "Failed to get books" });
  }
};

// Get a single book by ID
export const getBookById = async (req: Request, res: Response) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: "Failed to get book" });
  }
};

// Update a book by ID
export const updateBookById = async (req: Request, res: Response) => {
  try {
    const { title, author, genre } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { title, author, genre },
      { new: true }
    );
    if (!updatedBook) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: "Failed to update book" });
  }
};

// Delete a book by ID
export const deleteBookById = async (req: Request, res: Response) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete book" });
  }
};
