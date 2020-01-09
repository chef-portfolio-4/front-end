import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

import Homepage from "./components/Homepage";
import Login from "./components/LoginForm";
import ChefDashboard from "./components/chef/ChefDashboard";
import Register from "./components/RegisterForm";
import RecipesList from "./components/recipe/RecipesList";
import RecipeDetails from "./components/recipe/RecipeDetails";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink className="nav-home" to="/Homepage">
          Home
        </NavLink>
        <NavLink className="nav-post" to="/Recipes">
          Add_Recipe
        </NavLink>
        <NavLink className="nav-reg" to="/register">
          Register
        </NavLink>
        <NavLink className="nav-login" to="/Login">
          Login
        </NavLink>
        <NavLink className="nav-chef" to="/ChefDashboard">
          My Dashboard
        </NavLink>
      </nav>

      <section>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/recipeslist" component={RecipesList} />
          <Route path="/recipedetails" component={RecipeDetails} />
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
