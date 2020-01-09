import React, { useState } from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";
import axiosWithAuth from "../utils/AxiosWithAuth";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../store/authentication/AuthenticationActions";

const Login = () => {
  const [userCreds, setUserCreds] = useState({ username: "", password: "" });
  console.log(userCreds, "userCreds");

  function validateForm() {
    return userCreds.username.length > 0;
  }

  let onChange = e => {
    setUserCreds({ ...userCreds, [e.target.name]: e.target.value });
  };

  const history = useHistory();

  const handleSubmit = () => {
    axiosWithAuth()
      .post("/auth/login", userCreds)
      .then(response => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.userId);
        console.log(response.data, "****Login Form response****");
        console.log(localStorage.userId, "****LocalStorage****");
        history.push("/chefdashboard");
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="Login">
      <form
        onSubmit={(event, props) => {
          event.preventDefault();
          handleSubmit(props);
        }}
      >
        <FormGroup>
          <Label>Username</Label>
          <Input
            autoFocus
            name="username"
            type="text"
            value={userCreds.username}
            placeholder="Username"
            onChange={onChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            name="password"
            type="password"
            value={userCreds.password}
            placeholder="*******"
            onChange={onChange}
            required
          />
        </FormGroup>
        <Button
          color="primary"
          block
          size="lg"
          disabled={!validateForm()}
          type="submit"
        >
          Login
        </Button>
        <Button
          color="danger"
          block
          size="lg"
          disabled={!validateForm()}
          type="submit"
        >
          Forgot Password?
        </Button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state, "state");
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};
export default connect(mapStateToProps, { login })(Login);
