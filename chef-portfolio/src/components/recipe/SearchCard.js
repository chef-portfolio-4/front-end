import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Card, CardText, Button, CardHeader } from "reactstrap";



const SearchCard = props => {

    return (
      <div className="recipe-card">
        <Card>
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
