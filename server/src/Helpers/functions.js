userSpec = (arg) => {
  const { _id, username, mail, lastname, firstname } = arg;
  return {
    id: _id,
    username: username,
    mail: mail,
    lastname: lastname,
    firstname: firstname
  }
};

foodSpec = (arg) => {
  const { _id, name, prepTime, ingredients, steps } = arg;
  return {
    id: _id,
    name: name,
    prepTime: prepTime,
    ingredients: ingredients,
    steps: steps
  }
};

// Exports
module.exports = {
  userSpec,
  foodSpec
};
