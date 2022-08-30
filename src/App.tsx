import React from "react";
import { Button } from "react-bootstrap";
import Login from "./components/Login";

function App() {
  return (
    <div className="">
      <Button variant="primary" className="btn-primary">
        Click
      </Button>
      <Login />
    </div>
  );
}

export default App;
