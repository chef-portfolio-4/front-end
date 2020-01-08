import React from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import { deleteRecipe } from "../../store/operator/OperatorActions";
import RecipeCard from "./RecipeCard";

import { Card } from "reactstrap";

const RecipeList = props => {
  console.log(props, "props in recipeList");

  return (
    <Card className="recipe-card">
      <div className="card-info">
        <div>
          {props.recipes.map(recipe => {
            return <RecipeCard key={recipe.id} recipe={recipe} />;
          })}
        </div>
      </div>
    </Card>
  );
};

const mapStateToProps = state => {
  // console.log(state, "state, in recipesList");
  return {
    recipes: state.recipe.recipes
  };
};

export default connect(mapStateToProps)(RecipeList);
