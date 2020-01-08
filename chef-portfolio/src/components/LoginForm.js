import React, { useState } from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";

export default function Login(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return userName.length > 0
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
            name="username"
            type="email"
            value={userName}
            placeholder="YourEmail@email.com"
            onChange={e => setUserName(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            name="password"
            type="password"
            value={password}
            placeholder="*******"
            onChange={e => setPassword(e.target.value)}
            required
          />
        </FormGroup>
        <Button color="primary" block size="lg" disabled={!validateForm()} type="submit">
          Login
        </Button>
        <Button color="danger" block size="lg" disabled={!validateForm()} type="submit">
          Forgot Password?
        </Button>
      </form>
    </div>
  );
}