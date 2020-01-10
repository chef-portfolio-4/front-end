import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import { Nav, NavItem } from 'reactstrap';
import PrivateRoute from "./utils/PrivateRoute";

import Homepage from "./components/Homepage";
import Login from "./components/LoginForm";
import ChefDashboard from "./components/chef/ChefDashboard";
import Register from "./components/RegisterForm";
import RecipesList from "./components/recipe/RecipesList";
import RecipeDetails from "./components/recipe/RecipeDetails";
import EditRecipeForm from "./components/recipe/EditRecipeForm";
import AddRecipeForm from "./components/recipe/AddRecipeForm";

function App() {
  return (
    <div className="App">
      <Nav>
        <NavItem>
        <NavLink className="nav home" to="/Homepage">🍽 Home</NavLink>
        </NavItem>
        <NavItem>
        <NavLink className="nav post" to="/AddRecipeForm">Add Recipe</NavLink>
        </NavItem>
        <NavItem>
        <NavLink className="nav reg" to="/Register">Register</NavLink>
        </NavItem>
        <NavItem>
        <NavLink className="nav login" to="/Login">Login</NavLink>
        </NavItem>
        <NavItem>
        <NavLink className="nav chef" to="/ChefDashboard">Dashboard</NavLink>
        </NavItem>
        <NavItem>
        <NavLink className="nav edit" to="/EditRecipeForm">Edit Recipe</NavLink>
        </NavItem>
        </Nav>

      <section>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/recipeslist" component={RecipesList} />
          <Route path="/recipedetails" component={RecipeDetails} />
          <Route path="/editrecipeform" component={EditRecipeForm} />
          <Route path="/addrecipeform" component={AddRecipeForm} />

          {/* <Route
            path="/chefdashboard"
            render={props => <ChefDashboard {...props} />}
          /> */}
          <Route path="/" component={Homepage} />
          <PrivateRoute exact path="/chefdashboard" component={ChefDashboard} />
          {/* <Route exact path="/" render={() => <Redirect to="/HomePage" />} />
            <Route exact path = '/post-form' component={Content} /> */}
        </Switch>
      </section>
    </div>
  );
}

export default App;
