import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import { Button, ConfigProvider } from "antd";
// import Auth from "./auth/Auth";
// import LearningTailwind from "./LearningTailwind/LearningTailwind";

// import Header from "./LearningTailwind/Header";
// import Test from "./LearningTailwind/Test";
// import Form from "./LearningTailwind/Form";
// import Footer_figma from "./LearningTailwind/Footer_figma";
// import LearningTw from "./omg/LearningTw";
// import LoginForm from "./omg/Login";
// import Layout from "./LearningTailwind/Layout/Layout";
import TestLayOut from "./LearningTailwind/Layout/TestLayOut";
import LearningHook from "./LearningHook/LearningHook";
import Product from "./redux/Product";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Cart from "./redux/Cart";
import AddProductForm from "./redux/AddProductForm";
import Antd from "./learningAntd/Antd";

const App: React.FC = () => {
  return (
    <>
      <TestLayOut />
    </>
    // <Provider store={store}>
    //   <div>
    //     <Cart />
    //     <AddProductForm />
    //   </div>
    // </Provider>

    // <div className="container">
    //   {/* <h1 style={{ marginLeft: "96px" }} ml-96> */}
    //   {/* <Auth />; */}
    //   <LearningTailwin />

    // </div>
  );
};

export default App;
