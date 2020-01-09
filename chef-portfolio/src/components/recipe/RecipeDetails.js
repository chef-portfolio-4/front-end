import React, { Component } from "react";
import { connect } from "react-redux";
import RecipeCard from "./RecipeCard";
// import { singleRecipe } from '../actions/recipeActions';
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

class RecipeDetails extends Component {
  componentDidMount() {
    // const id = this.props.match.params.id;
    // this.props.RecipeDetails(id);
    console.log(this.props, "props in recipeDetails");
  }
  render() {
    const { recipe } = this.props;
    if (recipe) {
      return (
        <div>
          <div />
          <section id="boxes">
            <div className="container">
              <h1>
                <span className="highlight">{recipe.recipeName}</span> Recipe
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
                  <CardText>{recipe.instructions}</CardText>
                  {/* <CardFooter>{recipe.mealType}</CardFooter> */}
                  {/* </CardBody> */}
                </Card>
              </div>
            </div>
          </section>
          {/* <Footer/> */}
        </div>
      );
    } else return <h1>Loading...</h1>;
  }
}
// const mapStateToProps = state => ({
//   recipe: state.recipe.recipes
// });
export default connect(null)(RecipeDetails);
