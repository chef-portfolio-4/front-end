import React from "react";
import { Link } from "react-router-dom";
import RecipeCard from "../recipe/RecipeCard";
import { connect, useSelector } from "react-redux";
import { getAllRecipes } from "../../store/recipe/RecipeActions";
import {Button} from "reactstrap";

const ChefDashboard = props => {
  console.log(props, "props in chefDashboard");
  const isLogged = useSelector(state => state.isAuthenticated);
  console.log(isLogged, "isLogged");
  return (
    <div className="dashboard">
      <div className="link-div">
        <Link className="link" to="/AddRecipeForm"><Button size="lg" color="primary" type="submit">
          Add New Recipe</Button>
        </Link>
      </div>
      {console.log(props, "test")}
      {props.recipes.map(recipe => {
        return (
          <div className="cards">
            <RecipeCard key={recipe.id} recipe={recipe} />
          </div>
        );
      })}
      
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
