import React from "react";
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
  CardTitle
  // CardSubtitle,
  // CardFooter,
  // CardHeader
} from "reactstrap";

const RecipeDetails = props => {
  const dispatch = useDispatch();
  const pathname = props.location.pathname.split("/");
  const id = pathname[2];
  console.log(id, "id");
  dispatch(getSingleRecipe(id));
  // const id = this.props.match.params.id;
  // this.props.RecipeDetails(id);
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
              <RecipeCard />
              {/* <CardImg src={recipe.image} alt="recipe" />
                  <CardBody>
                  <CardHeader><h4>{recipe.chefName}</h4></CardHeader> */}
              <CardTitle>
                <h5>Ingredients:</h5>
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
