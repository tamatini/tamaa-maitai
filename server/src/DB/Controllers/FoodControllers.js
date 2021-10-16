// Imports
const Food = require('../Models/FoodModel');

// Functions
foodSpec = (arg) => {
  const {_id, name, prepTime, ingredients, steps} = arg;
  return {
    id: _id,
    name: name,
    prepTime: prepTime,
    ingredient: ingredients,
    steps: steps
  }
};

// Methods
// Return an Array of recipes
// GET /api/v1/foods
getAllFood = async (req, res) => {
  try {
    const foods = await Food.find();
    const food = foods.map(dish => {
      return foodSpec(dish)
    });
    res.status(200).json({
      success: true,
      code: 200,
      data: food
    });
  } catch (err) {
    console.log(err);
  }
};

// Post a new recipe
// POST /api/v1/foods
postFood = async (req, res) => {
  try {
    const body = req.body;
    const food = await new Food(body);
    await food.save();
    res.status(201).json({
      success: true,
      code: 201,
      data: foodSpec(food)
    });
  } catch (err) {
    console.log(err);
  }
};

// Return a single dishes with id as a parameter
// GET /api/v1/foods/:id
getFoodById = async (req, res) => {
  try {
    const id = req.params.id;
    const food = await Food.findById(id);
    res.status(200).json({
      success: true,
      code: 201,
      data: foodSpec(food)
    });
  } catch (err) {
    console.log(err);
  }
};

// Update dish with id as a parameter
// PUT /api/v1/foods/:id
updateFood = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const food = Food.findByIdAndUpdate(id, body, {new: true});
    res.status(201).json({
      success: true,
      code: 201,
      data: foodSpec(food)
    });
  } catch (err) {
    console.log(err);
  }
};

// Delete dish with id as a parameter
// DELETE /api/v1/food/:id
deleteFood = async (req, res) => {
  try {
    const id = req.params.id;
    await Food.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      code: 200,
      msg: 'Dish has been deleted'
    });
  } catch (err) {
    console.log(err);
  }
};

// Exports
module.exports = {
  getAllFood,
  postFood,
  getFoodById,
  updateFood,
  deleteFood
};
