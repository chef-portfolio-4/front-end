import React from "react";
import { Route, NavLink, Link, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { BrowserRouter as Router } from "react-router-dom";

import Homepage from "./components/Homepage";
import Login from "./components/LoginForm";
import ChefDashboard from "./components/chef/ChefDashboard";
import Register from "./components/RegisterForm";
import RecipesList from "./components/recipe/RecipesList";
import RecipeDetails from "./components/recipe/RecipeDetails";
import EditRecipeForm from "./components/recipe/EditRecipeForm";
import AddRecipeForm from "./components/recipe/AddRecipeForm";
import Logout from "./components/Logout";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink className="nav-home" to="/Homepage">
          Home
        </NavLink>
        <NavLink className="nav-post" to="/AddRecipeForm">
          Add_Recipe
        </NavLink>
        <NavLink className="nav-reg" to="/Register">
          Register
        </NavLink>
        <NavLink className="nav-login" to="/Login">
          Login
        </NavLink>
        <NavLink className="nav-chef" to="/ChefDashboard">
          My Dashboard
        </NavLink>
        <NavLink className="nav-edit" to="/EditRecipeForm">
          Edit_Recipe
        </NavLink>
        <NavLink className="nav-logout" to="/Homepage" s>
          Logout
        </NavLink>
        <a href="https://chef-portfolio-4.github.io/landing-page/">
          Landing Page
        </a>
      </nav>

      <section>
        {/* <Router> */}
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/recipeslist" component={RecipesList} />
          <Route path="/recipedetails/:id" component={RecipeDetails} />
          <Route path="/editrecipeform/:id" component={EditRecipeForm} />
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
        {/* </Router> */}
      </section>
    </div>
  );
}

export default App;
