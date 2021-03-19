import React from "react";
import { FaCheck } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { FiCalendar } from "react-icons/fi";
import styled from "styled-components";

function Todo({ text, todo, todos, setTodos }) {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
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
        <button onClick={completeHadler} className="complete-btn">
          <FaCheck />
        </button>
        <li className={`todo-item ${todo.Done ? "Done" : ""}`}>{text}</li>
      </div>
      <div className="li-right">
        {new Date().toDateString()}
        <FiCalendar />
        <button onClick={deleteHandler} className="delete-btn">
          <MdClose />
        </button>
      </div>
    </TodoContainer>
  );
}

export default Todo;

const TodoContainer = styled.div`
  width: 100%;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 1s ease;
  /* border-bottom: 1px solid var(--gray100); */

  li {
    flex: 1;
    color: var(--gray);
  }

  .li-left {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .li-right {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 12px;
    color: var(--gray200);

    svg {
      margin: 10px;
    }
    .delete-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--red);
      font-size: 15px;

      cursor: pointer;
    }
    .delete-btn:hover {
      background: pink;
      border-radius: 50%;
    }
  }

  .complete-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--blue);
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    cursor: pointer;
    font-size: 10px;
    margin-right: 20px;
  }

  .Done {
    text-decoration: line-through;
    opacity: 0.5;
    color: var(--blue);
  }
`;
