import axios from "axios";
import React, { useState } from "react";
import RegisterRequest from "../interfaces/RegisterRequest";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  enum InputID {
    USERNAME = "username",
    PASSWORD = "password",
  }

  const updateInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.id === InputID.USERNAME) setUsername(event.target.value);
    if (event.target.id === InputID.PASSWORD) setPassword(event.target.value);
  };

  const register = async () => {
    const registerRequest: RegisterRequest = {
      username: username as string,
      password: password as string,
    };
    const registerResponse = await axios.post("/register", registerRequest);
    console.log(registerResponse.data);
  };

  return (
    <div>
      <input
        id="username"
        type="text"
        placeholder="username"
        value={username}
        onChange={updateInput}
      />
      <input
        id="password"
        type="password"
        placeholder="password"
        value={password}
        onChange={updateInput}
      />
      <button onClick={register}>Submit</button>
    </div>
  );
}
