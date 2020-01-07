import React from "react";
import AddRecipe from "./AddRecipe";
import {Link} from "react-router-dom"

const ChefDashboard = props => {
  return (
    <div className="dashboard">
      {/* <h3>Welcome, {userName}</h3> */}
      {props.recipesList.map(item => {
        return (
          <div className="cards">
            {" "}
            <Link className="link" to="/AddRecipe">
              Add New Recipe
            </Link>{" "}
          </div>
        );
      })}
      {/* map over recipes and display all recipes that were created by the logged in user*/}
    </div>
  );
};
export default ChefDashboard;
