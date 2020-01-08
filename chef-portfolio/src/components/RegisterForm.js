import React, { useState } from "react";
import { Button, FormGroup, Label, Input, FormText } from "reactstrap";

export default function Register(props) {
  const [userCreds, setUserCreds] = useState({ username: "", password: "", name: "", email:"", location:"" });

  function validateForm() {
    return userCreds.password.length > 0 && userCreds.password.length > 6;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  let onChange = e => {
    setUserCreds({ ...userCreds, [e.target.name]: e.target.value });

  return (
    <div className="Register">
      <form onSubmit={(event, props) => {
          event.preventDefault();
          handleSubmit(props);
        }}>
        <FormGroup>
          <Label>Email</Label>
          <Input
            autoFocus
            name="username"
            type="text"
            value={userCreds.username}
            placeholder="jdoe123"
            onChange={e => setUserName(e.target.value)}
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
            onChange={e => setPassword(e.target.value)}
            required
          />
          <FormText>Must be atleast 7 characters long.</FormText>
        </FormGroup>
        <FormGroup>
          <Label>Name</Label>
          <Input
            name="name"
            type="text"
            value={name}
            placeholder="John Doe"
            onChange={e => setName(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Location</Label>
          <Input
            name="location"
            type="text"
            value={location}
            placeholder="California, USA"
            onChange={e => setLocation(e.target.value)}
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
}
