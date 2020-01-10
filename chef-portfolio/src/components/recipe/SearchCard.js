import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Card, CardText, Button, CardHeader } from "reactstrap";



const SearchCard = props => {

    return (
      <div className="recipe-card">
        <Card>
        <img className="foodImg" src={"https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"} />
        <CardText className="cardtext">recipe id : {props.recipe.id}</CardText>
          <CardHeader className="cardtitle">{props.recipe.name}</CardHeader>
          <CardText className="cardtext">{props.recipe.description}</CardText>
          <CardText className="cardtext">{props.recipe.meal_type}</CardText>
          <CardText className="cardtext">cooking time : {props.recipe.time}</CardText>
          <CardText className="cardtext">Chef id : {props.recipe.chef_id}</CardText>
        </Card>
      </div>
    );

};

export default SearchCard;
