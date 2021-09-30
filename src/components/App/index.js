import React from "react";
import AppUI from "./AppUI";
import { TodoProvider } from "../../TodoContext/index";

export default function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}
