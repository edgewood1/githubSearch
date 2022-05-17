import React from "react";
import { render } from "react-dom";
import Layout from "./pages/Layout";

const App = () => {
  return <Layout />;
};

render(React.createElement(App), document.getElementById("root"));
