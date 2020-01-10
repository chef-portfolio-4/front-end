import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
// import { deleteRecipe } from "../../store/operator/OperatorActions";
import RecipeCard from "./RecipeCard";

import { Card } from "reactstrap";

import { getAllRecipes } from "../../store/recipe/RecipeActions";

const RecipeList = props => {
  const history = useHistory();
  // const [recipes] = useState([]);
  // const dispatch = useDispatch();
  useEffect(() => {
    props.getAllRecipes();
    console.log(props, history, "hello");
    // console.log(recipeReducer, "reducer");
  }, []);

  // if (getAllRecipes) {
  //   return <h2>Loading Recipes...</h2>;
  // } else if (getAllSuccess)
  return (
    <Card className="recipe-card">
      <div className="card-info">
        <div>
          {console.log(props.recipes, "recipes")}
          {props.recipes.map(recipe => {
            return (
              <RecipeCard key={recipe.id} recipe={recipe} history={history} />
            );
          })}
        </div>
      </div>
    </Card>
  );
};

const mapStateToProps = ({ recipeReducer }) => {
  console.log(recipeReducer, "recipeReducer, in recipesList");
  return {
    recipes: recipeReducer.recipes
  };
};

export default connect(mapStateToProps, { getAllRecipes })(RecipeList);
