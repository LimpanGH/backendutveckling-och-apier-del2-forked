const AnimalModel = require("./models/animal");

const findAnimal = async (id) => {
  return AnimalModel.findById(id);
};

const findAnimals = async () => {
  return AnimalModel.find();
};

const createAnimal = async (animal) => {
  const newAnimal = new AnimalModel(animal);
  return newAnimal.save();
};

const updateAnimal = async (id, animal) => {
  return AnimalModel.findByIdAndUpdate(id, animal);
};

const deleteAnimal = async (id) => {
  return AnimalModel.findByIdAndDelete(id);
};

module.exports = {
  findAnimal,
  findAnimals,
  createAnimal,
  updateAnimal,
  deleteAnimal,
};
