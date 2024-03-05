import React from 'react';
import GlobalFonts from './fonts/fonts.js';
import { createGlobalStyle } from 'styled-components';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Lobster;
    background: #2e2b2b;
    color: #5cffd9;
  }
`

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <GlobalFonts />
    <Global />
    <App />
  </React.StrictMode>
);