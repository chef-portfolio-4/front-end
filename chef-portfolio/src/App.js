import React from "react";
import { Route, NavLink, Switch, withRouter } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

import Homepage from "./components/Homepage";
import Login from "./components/LoginForm";
import ChefDashboard from "./components/ChefDashboard";
// import "./App.css";

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
        <NavLink className="nav-reg" to="/Register">
          Register
        </NavLink>
        <NavLink className="nav-login" to="/Login">
          Login
        </NavLink>
      </nav>

      <section>
        <Switch>
          <Route path="/login" component={Login} />
          {/* <Route path="/registerform" component={Register} />
            <Route path="/chefdashboard" render={props => <ChefDashBoard {...props} />} /> */}
          <Route path="/homepage" component={Homepage} />
          <PrivateRoute exact path="/chefdashboard" component={ChefDashboard} />
          {/* <Route exact path="/" render={() => <Redirect to="/HomePage" />} />
            <Route exact path = '/post-form' component={Content} /> */}
        </Switch>
      </section>
    </div>
  );
}

export default App;
