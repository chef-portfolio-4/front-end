import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import RecipeCard from "./RecipeCard";
import { getSingleRecipe } from "../../store/recipe/RecipeActions";
// import Header from './../components/header';
// import Footer from './../components/footer';
import {
  Card,
  // CardImg,
  CardText,
  // CardBody,
  CardTitle,
  // CardSubtitle,
  // CardFooter,
CardHeader
} from "reactstrap";

const RecipeDetails = props => {
  const id = props.match.params.id;
  // console.log(id, "id");
  useEffect(() => props.getSingleRecipe(id), []);
  console.log(props, "props in recipeDetails");

  return (
    <div>
      <div />
      <section id="boxes">
        <div className="container">
          <h1>
            <span className="highlight">{props.recipeName}</span> Recipe
          </h1>
          <div className="row"></div>
          <div>
            <Card>
              {/* <RecipeCard /> */}
              <CardHeader className="cardtitle">{props.recipe.name}</CardHeader>
              <CardText className="cardtext">Description: {props.recipe.description}</CardText>
              <CardText className="cardtext">Meal Type: {props.recipe.meal_type}</CardText>
              <CardText className="cardtext">Time: {props.recipe.time}</CardText>
              <CardText className="cardtext">Ingredients: coming soon</CardText>
              <CardText className="cardtext">Steps: coming after that</CardText>
              {/* <CardImg src={recipe.image} alt="recipe" />
                  <CardBody>
                  <CardHeader><h4>{recipe.chefName}</h4></CardHeader> */}
              <CardTitle>
                {/* <h5>Ingredients:{props.recipe.ingredients[0]}</h5> */}
              </CardTitle>
              {/* <CardSubtitle><h5>{recipe.ingredients && (recipe.ingredients).toString()}</h5></CardSubtitle> */}
              <CardText>{props.steps}</CardText>
              {/* <CardFooter>{recipe.mealType}</CardFooter> */}
              {/* </CardBody> */}
            </Card>
          </div>
        </div>
      </section>
      {/* <Footer/> */}
    </div>
  );
};
// } else return <h1>Loading...</h1>;
const mapStateToProps = ({ recipeReducer }) => ({
  recipe: recipeReducer.recipe
});
export default connect(mapStateToProps, { getSingleRecipe })(RecipeDetails);
