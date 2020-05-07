import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

let counter = 0;
const rootElement = document.getElementById("root");
setInterval(
  () =>
    ReactDOM.render(
      <React.StrictMode>
        <App counter={counter++} />
      </React.StrictMode>,
      rootElement
    ),
  1000
);
