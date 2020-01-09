import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import { deleteRecipe } from "../../store/operator/OperatorActions";
import RecipeCard from "./RecipeCard";

import { Card } from "reactstrap";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    axios
      .get("https://chefportfolio2020.herokuapp.com/api/recipes")
      .then(res => {
        console.log(res.data, "res.data");
        setRecipes(res.data);
      });
  }, []);
  // if (recipes.length === 0) {
  //   return <h2>Loading...</h2>;
  // }
  return (
    <Card className="recipe-card">
      <div className="card-info">
        <div>
          {recipes.map(recipe => {
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
