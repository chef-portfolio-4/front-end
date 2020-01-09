import React, { useState } from "react";
import { Button, Label, Input } from "reactstrap";

// import {
//   FormDiv,
//   H1,
//   CustomInput,
//   CustomBtn,
//   AddTruckCard
// } from "../styles/StyledComponents";

const EditRecipeForm = props => {
  const [recipe, setRecipe] = useState({
    recipeName: "",
    // recipeImage: "",
    recipeType: "",
    ingredients: "",
    instructions: ""
  });

  const handleChanges = e => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = e => {
    e.preventDefault();
    console.log(recipe);
  };

  return (
    <div className="formdiv">
      <form className="forms" onSubmit={submitForm}>
        <Label>Add your recipe info here!</Label>

        <Input
          placeholder="Recipe Name"
          id="name"
          type="text"
          name="recipeName"
          onChange={handleChanges}
          value={recipe.recipeName}
        />

        <Label>Please Select a Meal Type!</Label>
        <Input
          type="select"
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
          </Input>

        <Label>Please Add Recipe Ingredients Here!</Label>
        <Input
          placeholder="Ingredients"
          id="ingredients"
          type="text"
          name="ingredients"
          onChange={handleChanges}
          value={recipe.ingredients}
        />

        <Label>Please Add Recipe Instructions Here!</Label>
        <Input
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
    </div>
  );
};

export default EditRecipeForm;
