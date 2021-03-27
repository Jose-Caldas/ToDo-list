import React from "react";
import Todo from "./Todo";
import styled from "styled-components";

function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <UlContainer>
      <ul>
        {filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            todo={todo}
            text={todo.text}
          />
        ))}
      </ul>
    </UlContainer>
  );
}

export default TodoList;

const UlContainer = styled.div`
  width: 100%;
  display: flex;
  overflow: auto;
  height: 300px;
  padding-left: 5px;

  ::-webkit-scrollbar {
    width: 15px;
    height: 10px;
  }

  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    list-style: none;
    animation-name: fade;
    animation-duration: 200ms;
    padding-left: 5px;
  }
`;
