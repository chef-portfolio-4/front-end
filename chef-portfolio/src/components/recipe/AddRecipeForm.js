import React, { useState } from "react";
import { addRecipe } from "../../store/recipe/RecipeActions";
import { Button } from "reactstrap";

// import {
//   FormDiv,
//   H1,
//   CustomInput,
//   CustomBtn,
//   AddTruckCard
// } from "../styles/StyledComponents";

const AddRecipeForm = props => {
  const [recipe, setRecipe] = useState({
    recipeName: "",
    // recipeImage: "",
    recipeType: "",
    ingredients: "",
    instructions: ""
  });
  console.log(recipe, "addrecipeform");

  const handleChanges = e => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = e => {
    e.preventDefault();
    console.log(recipe, "submitform recipe");
  };

  return (
    <div>
      <form className="forms" onSubmit={(addRecipe, submitForm)}>
        <h1>Add your recipe info here!</h1>

        <input
          placeholder="Recipe Name"
          id="name"
          type="text"
          name="recipeName"
          onChange={handleChanges}
          value={recipe.recipeName}
        />

        <h3>Please Select a Meal Type!</h3>
        <select
          name="recipeType"
          id="cuisine"
          onChange={handleChanges}
          value={recipe.recipeType}
        >
          <option value=""></option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="appetizer">Appetizer</option>
          <option value="dinner">Dinner</option>
          <option value="dessert">Dessert</option>
        </select>

        <h3>Please Add Recipe Ingredients Here!</h3>
        <input
          placeholder="Ingredients"
          id="ingredients"
          type="text"
          name="ingredients"
          onChange={handleChanges}
          value={recipe.ingredients}
        />

        <h3>Please Add Recipe Instructions Here!</h3>
        <input
          placeholder="Instructions"
          id="instructions"
          type="text"
          name="instructions"
          onChange={handleChanges}
          value={recipe.instructions}
        />
  <div>
        <Button className="buttons" size="lg" color="primary" type="submit">Submit Your Recipe!</Button></div>
      </form>

      {/* <AddRecipeCard>
        <p>Name: {recipe.recipeName}</p>
        <p>Meal type: {recipe.recipeType}</p>
      </AddRecipeCard> */}
    </div>
  );
};

export default AddRecipeForm;
