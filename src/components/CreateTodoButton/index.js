import React from "react";
import "./CreateTodoButton.css";
import { TodoContext } from "../../TodoContext/index";

export function CreateTodoButton() {
  const { setOpenModal } = React.useContext(TodoContext);

  const onClickTodoButton = () => {
    setOpenModal((prevState) => !prevState);
  };

  return (
    <button className="CreateTodoButton" onClick={onClickTodoButton}>
      +
    </button>
  );
}
