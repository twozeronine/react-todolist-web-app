import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
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
      <TodoTemplate>
        <TodoHead />
        <TodoList></TodoList>
      </TodoTemplate>
    </>
  );
}

export default App;
