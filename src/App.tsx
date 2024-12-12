import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, ConfigProvider } from "antd";
import Auth from "./auth/Auth";

function App() {
  return (
    <div className="container">
      {/* <h1 style={{ marginLeft: "96px" }} ml-96> */}
      <Auth />;
    </div>
  );
}

export default App;
