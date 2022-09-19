import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return React.createElement("div", null, "Hello World!")
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(App());
