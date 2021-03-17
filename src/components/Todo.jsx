import React from "react";
import { FaCheck } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import { FiCalendar } from "react-icons/fi";
import styled from "styled-components";

function Todo({ text, todo, todos, setTodos }) {
  //Events

  const deleteHandler = () => {
    setTodos(todos.filter((elem) => elem.id !== todo.id));
  };

  const completeHadler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            Done: !item.Done,
          };
        }
        return item;
      })
    );
  };

  return (
    <TodoContainer className="todo">
      <div className="li-left">
        <li className={`todo-item ${todo.Done ? "Done" : ""}`}>{text}</li>
        <button onClick={completeHadler} className="complete-btn">
          <FaCheck className="fas fa-check" />
        </button>
      </div>
      <div className="li-right">
        {new Date().toDateString()}
        <FiCalendar />
        <button onClick={deleteHandler} className="trash-btn">
          <BsTrash className="fas fa-trash" />
        </button>
      </div>
    </TodoContainer>
  );
}

export default Todo;

const TodoContainer = styled.div`
  width: 100%;
  margin: 0.5rem;
  font-size: 18px;
  color: var(--gray200);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 1s ease;

  .li-left {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
  }

  .li-right {
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  li {
    /* background: yellow; */
  }
`;
