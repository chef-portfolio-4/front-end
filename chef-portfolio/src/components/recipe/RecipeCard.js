import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  getSingleRecipe,
  deleteRecipe
} from "../../store/recipe/RecipeActions";
import EditRecipeForm from "./EditRecipeForm";
// import history from "../history";

// import { Card, Button, CardHeader } from "reactstrap";

//this should be pulling from all trucks array in backend
// const recipe = trucks.find(truck => props.match.params.id === `${truck.id}`);

const RecipeCard = props => {
  // const goToEditForm = () => {
  //   const id = props.match.params.id;
  //   console.log(id, "id");
  //   props.getSingleRecipe(id);
  //   console.log(props, "props in recipeDetails");
  // };

  const remove = id => {
    props.deleteRecipe(id);
    // props.history.push("/chefdashboard");
  };

  console.log(props, "props in recipeCard");
  return (
    <div className="recipe-card">
      <h3>{props.recipe.name}</h3>
      <div>{props.recipe.meal_type}</div>
      <div>{props.recipe.description}</div>
      <Link to={`/editrecipeform/${props.recipe.id}`}>
        <button>Edit Recipe</button>
      </Link>
      <button onClick={() => remove(props.recipe.id)}>Delete Recipe</button>
      <Link to={`/recipedetails/${props.recipe.id}`}>
        <button
        // color="danger"
        // onClick={() => props.history.push(`/recipecard/${props.recipe.id}`)}
        // onClick={() => history.push(`/recipedetails/${props.recipe.id`)}
        >
          View Instructions
        </button>
      </Link>
    </div>
  );
};

// const mapStateToProps = ({ recipeReducer }) => {
//   return {
//     recipe: recipeReducer.recipe
//   };
// };

export default connect(null, { getSingleRecipe, deleteRecipe, EditRecipeForm })(
  RecipeCard
);
