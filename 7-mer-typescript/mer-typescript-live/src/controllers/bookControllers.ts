import { Request, Response } from "express";
import BookModel from "../models/bookModel";

export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await BookModel.find();
    res.status(200).json(books);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message);
    }
  }
};

export const getBook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.id;
    const book = await BookModel.findById(bookId);
    res.status(200).json(book);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message);
    }
  }
};

export const createBook = async (req: Request, res: Response) => {
  try {
    const book = req.body;
    console.log(book);
    const newBook = await BookModel.create(book);
    res.status(201).json(newBook);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message);
    }
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.id;
    const updatedBook = req.body;
    await BookModel.findByIdAndUpdate(bookId, updatedBook, { new: true });
    res.status(200).json("Book updated successfully");
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message);
    }
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.id;
    await BookModel.findByIdAndDelete(bookId);
    res.status(200).json("Book deleted successfully");
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message);
    }
  }
};
