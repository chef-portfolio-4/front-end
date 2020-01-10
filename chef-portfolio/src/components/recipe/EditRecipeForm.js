import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button, Label, Input } from "reactstrap";
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
    <div className="formdiv">
      <form className="forms" onSubmit={submitForm}>
        <Label>Edit your recipe info here!</Label>

        <Input
          placeholder="Recipe Name"
          id="name"
          type="text"
          name="name"
          onChange={handleChanges}
          value={recipe.name}
        />
        <Label>Add a Description</Label>
        <Input
          placeholder="Description"
          id="description"
          type="text"
          name="description"
          onChange={handleChanges}
          value={recipe.description}
        />
        <Label>Estimated time to Cook</Label>
        <Input
          placeholder="Total Time"
          id="time"
          type="text"
          name="time"
          onChange={handleChanges}
          value={recipe.time}
        />

        <Label>Please Select a Meal Type!</Label>
        <Input
          type="select"
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
          </Input>

        {/*<Label>Please Add Recipe Ingredients Here!</Label>
        <Input
          placeholder="Ingredients"
          id="ingredients"
          type="text"
          name="ingredients"
          onChange={handleChanges}
          value=""
        />

        <Label>Please Add Recipe Instructions Here!</Label>
        <Input
          placeholder="Instructions"
          id="steps"
          type="text"
          name="steps"
          onChange={handleChanges}
          value={recipe.instructions}
        />*/}
    <div>
        <Button className="buttons" size="lg" color="primary" type="submit">Submit Your Recipe!</Button></div>
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
