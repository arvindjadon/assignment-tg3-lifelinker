import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

/*

01 Typography System

Font sizes (px):
10 / 12/ 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

SPacing System (px):
2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128

*/

:root{
  --color-grey-500: #555;
  --color-green-400: #d0f3ef;
  --color-sidebar: #2ec5b6;
  --color-sidebar-background: #ecfafa;
  --color-green-400: #9799fd;
  --color-green-400: #ffe747;
  --color-background: #f1f4f9;
  --color-green-400: #2196f3;
  --color-green-400: #11cdf0;
  --color-green-400: #fd5f54;
  --color-green-400: #10ccef;
  --color-green-400: #8585ff;
  --color-green-400: #45d798;
  --color-bell: #f24d5e;
  --color-green-400: ;
}

*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html{
  font-size: 62.5%;
}

body{
  font-family: sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color: var(--color-grey-500);
  max-width: 130rem;
}
`;

export default GlobalStyles;
