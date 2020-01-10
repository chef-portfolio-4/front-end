import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  getSingleRecipe,
  deleteRecipe
} from "../../store/recipe/RecipeActions";
import EditRecipeForm from "./EditRecipeForm";
// import history from "../history";

import { Card, CardText, Button, CardHeader } from "reactstrap";
// import image1 from "../image"

//this should be pulling from all trucks array in backend
// const recipe = trucks.find(truck => props.match.params.id === `${truck.id}`);

const RecipeCard = props => {
  // const goToEditForm = () => {
  //   const id = props.match.params.id;
  //   console.log(id, "id");
  //   props.getSingleRecipe(id);
  //   console.log(props, "props in recipeDetails");
  // };

  const remove = id => {
    props.deleteRecipe(id);
    // props.history.push("/chefdashboard");
  };

  console.log(props, "props in recipeCard");
  if (localStorage.userId !== null) {
    return (
      <div className="recipe-card">
        <Card>
          <img
            width="inherited"
            height="150px"
            className="foodImg"
            src={
              "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            }
          />
          <CardHeader className="cardtitle">{props.recipe.name}</CardHeader>
          <CardText className="cardtext">{props.recipe.meal_type}</CardText>
          <CardText className="cardtext">{props.recipe.description}</CardText>

          <div className="buttondiv">
            <Link to={`/editrecipeform/${props.recipe.id}`}>
              <Button size="lg" color="primary" className="buttons">
                Edit Recipe
              </Button>
            </Link>
            <Button
              size="lg"
              color="danger"
              className="buttons"
              onClick={() => remove(props.recipe.id)}
            >
              Delete Recipe
            </Button>
            <Link to={`/recipedetails/${props.recipe.id}`}>
              <Button
                size="lg"
                color="info"
                className="buttons"
                key={props.recipe.id}
                // color="danger"
                // onClick={() => props.history.push(`/recipecard/${props.recipe.id}`)}
                // onClick={handleClick}
              >
                View Instructions
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  } else {
    return (
      <div className="recipe-card">
        <Card>
          <CardHeader className="cardtitle">{props.recipe.name}</CardHeader>
          <CardText className="cardtext">{props.recipe.meal_type}</CardText>
          <CardText className="cardtext">{props.recipe.description}</CardText>
        </Card>
      </div>
    );
  }
};

// const mapStateToProps = ({ recipeReducer }) => {
//   return {
//     recipe: recipeReducer.recipe
//   };
// };

export default connect(null, { getSingleRecipe, deleteRecipe, EditRecipeForm })(
  RecipeCard
);
