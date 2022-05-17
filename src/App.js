import React from "react";
import { createRoot } from "react-dom/client";
import Layout from "./pages/Layout";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const App = () => {
  return <Layout />;
};

root.render(<App />);
