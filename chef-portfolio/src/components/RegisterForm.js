import React, { useState } from "react";
import { connect } from "react-redux";
// import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/AxiosWithAuth";
import { Button, FormGroup, Label, Input, FormText } from "reactstrap";
import { login } from "../store/authentication/AuthenticationActions";

const Register = () => {
  const [userCreds, setUserCreds] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
    location: ""
  });
  console.log(userCreds, "userCreds");

  function validateForm() {
    return userCreds.password.length > 0 && userCreds.password.length > 6;
  }

  let onChange = e => {
    setUserCreds({ ...userCreds, [e.target.name]: e.target.value });

    const handleSubmit = props => {
      axiosWithAuth()
        .post("/auth/login", userCreds)
        .then(response => {
          localStorage.setItem("token", response.data.token);
          console.log(response.data, "response.data");
          // props.login(response.data);
          props.history.push("/chefdashboard");
        })
        .catch(err => console.log(err));
    };

    return (
      <div className="Register">
        <form
          onSubmit={(event, props) => {
            event.preventDefault();
            handleSubmit(props);
          }}
        >
          <FormGroup>
            <Label>UserName</Label>
            <Input
              name="username"
              type="text"
              value={userCreds.username}
              placeholder="jdoe123"
              onChange={onChange}
              required
            />
            <FormText>You'll use this to Login everytime.</FormText>
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
            <FormText>Must be atleast 7 characters long.</FormText>
          </FormGroup>
          <FormGroup>
            <Label>Name</Label>
            <Input
              autoFocus
              name="name"
              type="text"
              value={userCreds.name}
              placeholder="Sponge Bob"
              onChange={onChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input
              autoFocus
              name="email"
              type="email"
              value={userCreds.email}
              placeholder="squarepants@email.com"
              onChange={onChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Location</Label>
            <Input
              name="location"
              type="text"
              value={userCreds.location}
              placeholder="California, USA"
              onChange={onChange}
              required
            />
          </FormGroup>
          <Button
            color="primary"
            block
            size="lg"
            type="submit"
            disabled={!validateForm()}
          >
            Register
          </Button>
        </form>
      </div>
    );
  };
};

const mapStateToProps = state => {
  console.log(state, "state");
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};
export default connect(mapStateToProps, { login })(Register);
