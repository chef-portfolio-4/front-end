import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
// import { addFavorite } from "../../store/diner/DinerActions";
// import { deleteTruck } from "../../store/operator/OperatorActions";
import RecipeCard from "./RecipeCard";

import { Card } from "reactstrap";

const RecipeList = props => {
  console.log("props", props);

  //this should be pulling from all trucks array in backend

  return (
    <Card className="recipe-card">
      <div className="card-info">
        {/* <CardContent>
          {recipes.map(recipe => {
            return <RecipeCard key={recipe.id} recipe={recipe} />;
          })}
        </CardContent> */}
      </div>
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  };
};

export default connect(mapStateToProps)(RecipeList);
