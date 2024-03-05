import { createGlobalStyle } from "styled-components";

import LobsterWoff from "./Lobster.woff";
import LobsterWoff2 from "./Lobster.woff2";

export default createGlobalStyle`
  @font-face {
    font-family: 'Lobster';
    src: local('Lobster'),
    url(${LobsterWoff2}) format('woff2'),
    url(${LobsterWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }
`