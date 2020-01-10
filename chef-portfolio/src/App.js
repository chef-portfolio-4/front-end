import React from "react";
import { Nav, NavItem } from "reactstrap";
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
// import Logout from "./components/Logout";
import SearchForm from "./components/recipe/SearchForm";

function App() {
  return (
    <div className="App">
      <Nav>
        <NavItem>
          <img
            src="cheflogo.png"
            alt="chef portfolio logo"
            className="cheflogo"
          ></img>
        </NavItem>
        <NavItem>
          <NavLink className="nav home" to="/Homepage">
            🍽 Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav reg" to="/Register">
            Register
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav login" to="/Login">
            Login
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav chef" to="/ChefDashboard">
            Dashboard
          </NavLink>
        </NavItem>
        <NavItem>
          <a href="https://chef-portfolio-4.github.io/landing-page/">
            Landing Page
          </a>
        </NavItem>
        <NavLink className="nav search" to="/searchform">
            Search
          </NavLink>
      </Nav>

      <section>
        {/* <Router> */}
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/recipeslist" component={RecipesList} />
          <Route path="/recipedetails/:id" component={RecipeDetails} />
          <Route path="/editrecipeform/:id" component={EditRecipeForm} />
          <Route path="/addrecipeform" component={AddRecipeForm} />
          <Route path="/searchform" component={SearchForm} />

          <Route path="/chefdashboard" render={props => <ChefDashboard />} />
          <Route path="/" component={Homepage} />
          <PrivateRoute path="/chefdashboard" component={ChefDashboard} />
          <PrivateRoute path="/addrecipeform" component={AddRecipeForm} />
          <PrivateRoute path="/editrecipeform/:id" component={EditRecipeForm} />
          {/* <Route exact path="/" render={() => <Redirect to="/HomePage" />} />
            <Route exact path = '/post-form' component={Content} /> */}
        </Switch>
        {/* </Router> */}
      </section>
    </div>
  );
}

export default App;
