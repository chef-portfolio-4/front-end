import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
import { connect } from "react-redux";

import { deleteRecipe } from "../../store/recipe/RecipeActions";
import EditRecipeForm from "./EditRecipeForm";

// import { Card, Button, CardHeader } from "reactstrap";

//this should be pulling from all trucks array in backend
// const recipe = trucks.find(truck => props.match.params.id === `${truck.id}`);

// const goToEditForm = props => {
//   props.history.push({
//     pathname: "/editrecipeform",
//     state: {
//       name: props.recipeName
//     }
//   });
// };

// const remove = props => {
//   props.deleteRecipe(recipe.id);
//   props.history.push("/chefdashboard");
// };

const RecipeCard = props => {
  console.log(props, "props in recipeCard");
  return (
    <div className="recipe-card">
      <h3>{props.recipe.recipeName}</h3>
      <div>{props.recipe.recipeType}</div>
      <div>{props.recipe.ingredients}</div>

      <button>Edit Recipe</button>
      <button>Delete Recipe</button>
      <button
        key={props.recipe.id}
        // color="danger"
        onClick={() => props.history.push(`/recipecard/${props.recipe.id}`)}
      >
        View Instructions
      </button>
    </div>
  );
};

// const mapStateToProps = state => {
//   return {
//     role: state.auth.role
//   };
// };

export default connect(null, { deleteRecipe, EditRecipeForm })(RecipeCard);
