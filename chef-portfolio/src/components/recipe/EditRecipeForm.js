import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  getSingleRecipe,
  modifyRecipe
} from "../../store/recipe/RecipeActions";

// import {
//   FormDiv,
//   H1,
//   CustomInput,
//   CustomBtn,
//   AddTruckCard
// } from "../styles/StyledComponents";

const EditRecipeForm = props => {
  const id = props.match.params.id;
  // console.log(id, "id");
  useEffect(() => {
    props.getSingleRecipe(id);
    setRecipe(props.currentRecipe);
  }, []);
  console.log(props, "props in recipeForm");
  const [recipe, setRecipe] = useState({
    id: id,
    name: "",
    description: "",
    meal_type: "",
    time: "",
    chef_id: localStorage.userId
  });
  // console.log(recipe, "addrecipeform");
  console.log(props, "props on recipeForm");

  const handleChanges = e => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = e => {
    e.preventDefault();
    props.modifyRecipe(id, {
      id: id,
      name: recipe.name,
      description: recipe.description,
      meal_type: recipe.meal_type,
      time: recipe.time,
      chef_id: localStorage.userId
    });
    props.history.push("/homepage");
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
          value=""
        />

        <h3>Please Add Recipe Instructions Here!</h3>
        <input
          placeholder="Instructions"
          id="steps"
          type="text"
          name="steps"
          onChange={handleChanges}
          value=""
        /> */}

        <button type="submit">Submit Your Recipe!</button>
      </form>
    </div>
  );
};
const mapStateToProps = ({ recipeReducer }) => ({
  currentRecipe: recipeReducer.recipe
});
export default connect(mapStateToProps, { getSingleRecipe, modifyRecipe })(
  EditRecipeForm
);
// export default EditRecipeForm;
