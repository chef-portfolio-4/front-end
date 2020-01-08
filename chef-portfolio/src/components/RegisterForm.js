import React, { useState } from "react";
import { Button, FormGroup, Label, Input, FormText } from "reactstrap";

export default function Register(props) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");

    function validateForm() {
        return userName.length > 0 && password.length > 6
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="Register">
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
                    <FormText>You'll use this to Login everytime.</FormText>
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
                <Button color="primary" block size="lg" type="submit" disabled={!validateForm()}>
                    Register
                </Button>
            </form>
        </div>
    );
}