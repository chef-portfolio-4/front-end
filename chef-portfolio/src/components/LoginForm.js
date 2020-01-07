import React, { useState } from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Email</Label>
          <Input
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block size="lg" disabled={!validateForm()} type="submit">
          Login
        </Button>
        <Button block size="lg" disabled={!validateForm()} type="submit">
          Forgot Password?
        </Button>
      </form>
    </div>
  );
}