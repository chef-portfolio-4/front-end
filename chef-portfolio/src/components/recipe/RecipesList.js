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
    <Card className="truck-card">
      <CardHeader title={truck.truckName} subheader={truck.cuisine} />
      <CardMedia
        className={classes.media}
        image={placeholderTruck}
        title={truck.truckName}
      />
      <div className="card-info">
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {truck.truckMenu.map(food => {
              return (
                <ul key={food.item} className="menu-item">
                  <div className="foodname-description">
                    <li>{food.item}</li>
                    <li className="description">{food.description}</li>
                  </div>
                  <li>{food.price}</li>
                </ul>
              );
            })}
          </CardContent>
        </Collapse>
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