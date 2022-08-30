import axios from "axios";
import React from "react";
import RegisterRequest from "../interfaces/RegisterRequest";
export default function Login() {
  const register = async () => {
    const registerRequest: RegisterRequest = {
      username: "toni",
      password: "secret",
    };
    const registerResponse = await axios.post("/register", registerRequest);
    console.log(registerResponse.data);
  };

  return (
    <div>
      <input type="text" placeholder="username" />
      <input type="text" placeholder="password" />
      <button onClick={register}>Submit</button>
    </div>
  );
}
