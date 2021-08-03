//skeema, josta tehdään model joka exportataan
const mongoose = require("mongoose");

// Skeeman luonti. Skeema määrittää kannassa olevan tiedon muodon. (avain-arvoparit)
const RecipeSchema = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },
  name: { type: String, required: true },
  author: { type: String, required: true },
  supplies: [
    {
      name: { type: String },
      quantity: { type: String },
    },
  ],
  recipe: { type: String },
});

// Tehdään skeemasta model, jonka metodeilla kantaoperaatioita suoritetaan.
// Model on luokka joka sisältää skeeman
const Recipe = mongoose.model("Recipe", RecipeSchema);

// Exportataan model
module.exports = Recipe;
