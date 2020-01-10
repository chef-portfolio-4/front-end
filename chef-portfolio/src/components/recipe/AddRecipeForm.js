import React, { useState } from "react";
import { connect } from "react-redux";
import { addRecipe } from "../../store/recipe/RecipeActions";

// import {
//   FormDiv,
//   H1,
//   CustomInput,
//   CustomBtn,
//   AddTruckCard
// } from "../styles/StyledComponents";

const AddRecipeForm = props => {
  // const dispatch = useDispatch();
  const [recipe, setRecipe] = useState({
    name: "",
    // recipeImage: "",
    description: "",
    meal_type: "",
    time: "",
    chef_id: localStorage.userId
    // steps: "",
    // ingredients: ""
  });
  // console.log(recipe, "addrecipeform");
  // console.log(props, "props on recipeForm");

  const handleChanges = e => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = e => {
    e.preventDefault();
    props.addRecipe(recipe);
    console.log(recipe, "submitform recipe");
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <h1>Add your recipe info here!</h1>

        <input
          placeholder="Recipe Name"
          id="name"
          type="text"
          name="name"
          onChange={handleChanges}
          value={recipe.name}
        />
        <input
          placeholder="Description"
          id="description"
          type="text"
          name="description"
          onChange={handleChanges}
          value={recipe.description}
        />

        <input
          placeholder="Total Time"
          id="time"
          type="text"
          name="time"
          onChange={handleChanges}
          value={recipe.time}
        />

        <h3>Please Select a Meal Type!</h3>
        <select
          name="meal_type"
          id="meal_type"
          onChange={handleChanges}
          value={recipe.meal_type}
        >
          <option value=""></option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="appetizer">Appetizer</option>
          <option value="dinner">Dinner</option>
          <option value="dessert">Dessert</option>
        </select>

        {/* <h3>Please Add Recipe Ingredients Here!</h3>
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
          id="steps"
          type="text"
          name="steps"
          onChange={handleChanges}
          value={recipe.steps}
        /> */}

        <button type="submit">Submit Your Recipe!</button>
      </form>

      {/* <AddRecipeCard>
        <p>Name: {recipe.recipeName}</p>
        <p>Meal type: {recipe.recipeType}</p>
      </AddRecipeCard> */}
    </div>
  );
};

const mapStateToProps = state => {
  // console.log(state, "state, in recipesList");
  return {
    recipes: state.recipes
  };
};

export default connect(mapStateToProps, { addRecipe })(AddRecipeForm);

// export default AddRecipeForm;
