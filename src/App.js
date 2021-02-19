import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";

const GlobalStyle = createGlobalStyle`
  body{
    background:#96f2d7;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>Hello, World!</TodoTemplate>
    </>
  );
}

export default App;
