import React from "react";
import {Route, NavLink, Switch, withRouter} from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute";

import Homepage from "./components/Homepage";
import Login from "./components/LoginForm"
// import "./App.css";

function App() {
  return <div className="App">
  <nav>
        <NavLink className="nav-home" to="/Homepage">
            Home
          </NavLink>
        <NavLink className="nav-post" to ='/Recipes'>
            Add_Recipe
        </NavLink>
        <NavLink className='nav-reg' to="/RegisterForm">
            Register
          </NavLink>
        <NavLink className='nav-login' to="/LoginForm">
              Login
            </NavLink>
  </nav>
        
  <section>
          <Switch>
             <Route path="/login" component={LoginForm} />
           {/* <Route path="/registerform" component={RegisterForm} />
            <Route path="/chefdashboard" render={props => <ChefDashBoard {...props} />} /> */}
            <Route path="/homepage" component={Homepage} />
            <PrivateRoute exact path = "/chefdashboard" />
            {/* <Route exact path="/" render={() => <Redirect to="/HomePage" />} />
            <Route exact path = '/post-form' component={Content} /> */}
          </Switch>
  </section>


  </div>;
}

export default App;
