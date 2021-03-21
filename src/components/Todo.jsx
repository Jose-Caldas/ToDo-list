import React from "react";
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
        <button
          onClick={completeHadler}
          className={`complete-btn ${todo.Done ? "complete-btn" : "check"}`}
        >
          {/* <FaCheck /> */}
        </button>
        <li>{text}</li>
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
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation-name: move;
  animation-duration: 500ms;

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
    animation-name: move;
    animation-duration: 500ms;

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
      opacity: 0.8;
    }
  }

  .complete-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--blue);
    color: white;
    border-radius: 5px;
    width: 18px;
    height: 18px;
    cursor: pointer;
    font-size: 10px;
    margin-right: 20px;
    transition: 0.5s;
    padding-left: 3px;
  }

  .complete-btn:hover {
    box-shadow: 0px 0px 0px 2.3px #8f83d1;
  }
  .todo-item {
  }

  .check {
    background: var(--gray300);
    transition: 0.5s;
  }
  @keyframes move {
    from {
      opacity: 0;
      transform: translateX(-40%);
    }
    to {
      opacity: (1);
      transform: translateX(0);
    }
  }
`;
