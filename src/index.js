// libs
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";

// main component
import App from "./App";

// store
import store from "./store/store";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }
  
  body {
    min-height: 100dvh;
  }

  @media (width > 1080px) {
    .container {
      max-width: 1080px;
      margin: auto;
    }
  }

  @media (width < 1080px) {
    .container {
      width: 100%;
    }
  }

  ::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: white;
  }

  ::-webkit-scrollbar-thumb {
    background: #719FD0;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #6188B2;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>

    <GlobalStyles />
  </>
);
