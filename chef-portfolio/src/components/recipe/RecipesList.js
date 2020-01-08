import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
// import placeholderTruck from "./../../assets/placeholder-truck.jpg";
// import { trucks } from "./../../dummydata";
// import clsx from "clsx";
// import {
//   makeStyles,
//   Card,
//   Button,
//   CardHeader,
//   CardMedia,
//   CardContent,
//   Collapse,
//   CardActions,
//   IconButton
// } from "@material-ui/core";

import { connect } from "react-redux";
import { addFavorite } from "../../store/diner/DinerActions";
import { deleteTruck } from "../../store/operator/OperatorActions";

// const useStyles = makeStyles(theme => ({
//   media: {
//     height: 0,
//     paddingTop: "56.25%" // 16:9
//   },
//   expand: {
//     transform: "rotate(0deg)",
//     marginLeft: "auto",
//     transition: theme.transitions.create("transform", {
//       duration: theme.transitions.duration.shortest
//     })
//   },
//   expandOpen: {
//     transform: "rotate(180deg)"
//   }
// }));

const Truck = props => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  console.log("props", props);

  //this should be pulling from all trucks array in backend

  return (
    <Card className="recipe-card">
      <CardHeader title={recipe.recipeName} subheader={recipe.recipeType} />
      {/* <CardMedia
        className={classes.media}
        image={placeholderTruck}
        title={truck.truckName}
      /> */}
      <div className="card-info">
        {/* <Collapse in={expanded} timeout="auto" unmountOnExit> */}
          <CardContent>
            {recipes.map(recipe => {
              return (
              <RecipeCard>
              );
            })}
          </CardContent>
        {/* </Collapse> */}
      </div>
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    role: state.auth.role
  };
};

export default connect(mapStateToProps, { addFavorite, deleteTruck })(Truck);
