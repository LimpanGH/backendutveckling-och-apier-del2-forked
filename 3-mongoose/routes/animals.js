const express = require("express");
const {
  findAnimal,
  findAnimals,
  createAnimal,
  updateAnimal,
  deleteAnimal,
} = require("../db/animalCrud");

const router = express.Router();

// GET /animals
router.get("/", async (request, response) => {
  const animals = await findAnimals();
  response.json(animals);
});

// GET /animals/:id
router.get("/:id", async (request, response) => {
  const animal = await findAnimal(request.params.id);
  if (animal) {
    response.json(animal);
  } else {
    response.status(404).end();
  }
});

// POST /animals
router.post("/", async (request, response) => {
  const createdAnimal = await createAnimal(request.body);
  response.status(201).json(createdAnimal);
});

// PUT /animals/:id
router.put("/:id", async (request, response) => {
  const updatedAnimal = await updateAnimal(request.params.id, request.body);
  response.json(updatedAnimal);
});

// DELETE /animals/:id
router.delete("/:id", async (request, response) => {
  await deleteAnimal(request.params.id);
  response.status(204).end();
});

module.exports = router;
