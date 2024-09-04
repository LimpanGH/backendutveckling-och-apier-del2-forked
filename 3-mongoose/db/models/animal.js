const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const animalSchema = new Schema({
    type: String,
    name: String,
    isMammal: Boolean,
    numberOfLegs: Number,
});

const AnimalModel = mongoose.model("Animal", animalSchema);

module.exports = AnimalModel;