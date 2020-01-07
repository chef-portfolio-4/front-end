import React, { useState } from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";

export default function Register(props) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");


    function validateForm() {
        return userName.length > 0 && password.length > 0 && name.length > 0 && location.length > 0;
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
                        onChange={e => setUserName(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input
                        name="password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Name</Label>
                    <Input
                        name="name"
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Location</Label>
                    <Input
                        name="location"
                        type="text"
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                    />
                </FormGroup>
                <Button block size="lg" disabled={!validateForm()} type="submit">
                    Register
        </Button>
            </form>
        </div>
    );
}