import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

import { DELETE_RECIPE, EDIT_RECIPE } from "../../store/recipe/RecipeActions";

//this should be pulling from all trucks array in backend
// const recipe = trucks.find(truck => props.match.params.id === `${truck.id}`);

const goToEditForm = () => {
  props.history.push({
    pathname: "/editrecipeform",
    state: {
      name: recipe.recipeName
    }
  });
};

const remove = () => {
  props.deleteRecipe(recipe.id);
  props.history.push("/chefdashboard");
};

const RecipeCard = () => {
  return (
    <Card className="recipe-card">
      <CardHeader title={recipe.recipeName} subheader={recipe.recipeType} />
      {/* <CardMedia
        className={classes.media}
        image={placeholderImage}
        title={recipe.recipeName}
      /> */}
      <div className="card-info">
        <CardContent>
          {props.role === "diner" && (
            <div class-name="card-rate-heart">
              <div className="user-rate">
                <p className="rate-title">Add your rating</p>
                <CustomerRating />
              </div>
              <Fav truck={truck} />
            </div>
          )}
          {props.role === "operator" && (
            <div className="edit-delete-buttons">
              <Button
                className="edit-btn"
                color="primary"
                onClick={goToEditForm}
              >
                Edit Truck
              </Button>
              <Button className="delete-btn" color="secondary" onClick={remove}>
                Delete Truck
              </Button>
            </div>
          )}
        </CardContent>
      </div>
      <div className="card-menu">
        <CardContent>
          {recipes.map(recipe => {
            return (
              <ul key={recipe.recipeName} className="menu-item">
                <div className="foodname-description">
                  <li>{recipe.recipeType}</li>
                </div>
              </ul>
            );
          })}
        </CardContent>
        {/* </Collapse> */}
      </div>
    </Card>
  );
};

// const mapStateToProps = state => {
//   return {
//     role: state.auth.role
//   };
// };

export default connect(mapStateToProps, { DELETE_RECIPE, EDIT_RECIPE })(
  RecipeCard
);
