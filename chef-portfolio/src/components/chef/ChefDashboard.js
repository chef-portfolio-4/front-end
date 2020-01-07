import React from "react";
import { Link } from "react-router-dom";
import RecipeCard from "../recipe/RecipeCard";
import { connect } from "react-redux";

const ChefDashboard = props => {
  return (
    <div className="dashboard">
      {props.recipes.map(recipe => {
        return <div className="cards"><RecipeCard key={recipe.id} recipe={recipe} /></div>;
      })}
      <div className="link-div">
        <Link className="link" to="/AddRecipeForm">Add New Recipe</Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    recipes: state.myRecipes
  };
};

export default connect(mapStateToProps, {})(ChefDashboard);
© 2020 GitHub, Inc.