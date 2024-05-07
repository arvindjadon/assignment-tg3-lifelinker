import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


:root{
  --color-grey-500: #555;
  --color-white: #fff;
  --color-background: #f1f4f9;
  --color-sidebar-background: #2ec5b6;
  --color-sidebar: #ecfafa;
  --color-visited: #777;
  --color-sidebar-selected: #d0f3ef;
  --color-purple-100: #8583fe;
  --color-blue-100: #12cef3;
  --color-blue-200: #2097f5;
  --color-purple-200: #5a5adc;
  --color-bell: #f24d5e;
  
  --border-radius-md: 1rem;
  --border-radius-sm: 0.5rem;
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
  color: var(--color-visited);
  background-color: var(--color-background);
  line-height: 1.5;
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

table{
  width: 100%;
  border-collapse: collapse;
}

thead th {
  color:var(--color-blue-200);
  font-weight: 800;
}

tbody th {
  color: var(--color-sidebar-background);
  font-weight: 800;
}

th,td {
  padding: 1rem 2.4rem;
  text-align: center;
}

thead th, tbody tr:nth-child(even){
  background-color: #f1f4f9;
}
`;

export default GlobalStyles;
