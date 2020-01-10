import React from "react";
import { Link } from "react-router-dom";
import RecipeCard from "../recipe/RecipeCard";
import { connect, useSelector } from "react-redux";
import { getAllRecipes } from "../../store/recipe/RecipeActions";

const ChefDashboard = props => {
  console.log(props, "props in chefDashboard");
  const isLogged = useSelector(state => state.isAuthenticated);
  console.log(isLogged, "isLogged");
  return (
    <div className="dashboard">
      {console.log(props, "test")}
      {props.recipes.map(recipe => {
        return (
          <div className="cards">
            <RecipeCard key={recipe.id} recipe={recipe} />
          </div>
        );
      })}
      <div className="link-div">
        <Link className="link" to="/AddRecipeForm">
          Add New Recipe
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = ({ recipeReducer }) => {
  console.log(recipeReducer, "recipeReducer, in recipesList");
  return {
    recipes: recipeReducer.recipes
  };
};

export default connect(mapStateToProps, { getAllRecipes })(ChefDashboard);
