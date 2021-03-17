import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdKeyboard } from "react-icons/md";
import "./Global.css";
import Modal from "./components/Modal";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  // selecionar o status
  const [status, setStatus] = useState("all");

  // filtrar o estatus
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Salvar em LocalStorage
  useEffect(() => {
    const getLocalTodos = () => {
      if (localStorage.getItem("todos") === null) {
        window.localStorage.setItem("todos", JSON.stringify([]));
      } else {
        let todoLocal = JSON.parse(localStorage.getItem("todos"));
        setTodos(todoLocal);
      }
    };
    getLocalTodos();
    const saveLocalTodos = () => {
      window.localStorage.setItem("todos", JSON.stringify([]));
    };
    saveLocalTodos();
  }, []);
  //Use Effect

  useEffect(() => {
    const filteredHandler = () => {
      switch (status) {
        case "Done":
          setFilteredTodos(todos.filter((todo) => todo.Done === true));
          break;
        case "Todo":
          setFilteredTodos(todos.filter((todo) => todo.Done === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };

    filteredHandler();
  }, [todos, status]);

  return (
    <div className="App">
      <AppContainer>
        <MdKeyboard className="keyboard" />
        <Header>
          <Info>
            <small>Created by</small>
            <strong>José Caldas</strong>
          </Info>
          <h1>Keep productivity with DoList </h1>
          <h2>Tasks </h2>
        </Header>
        <Form
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          setStatus={setStatus}
        />
        <TodoList
          filteredTodos={filteredTodos}
          setTodos={setTodos}
          todos={todos}
        />
        <Modal
          inputText={inputText}
          setInputText={setInputText}
          setTodos={setTodos}
          todos={todos}
        />
      </AppContainer>
    </div>
  );
}

export default App;

// const Form = styled.div``;

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 700px;
  display: flex;
  min-height: 600px;
  flex-direction: column;
  margin: 0 auto;
  padding: 70px;
`;
const Header = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h1 {
    color: var(--blue);
    font-size: 40px;
    font-weight: bold;
  }
  h2 {
    color: var(--blue);
    font-size: 26px;
    font-weight: bold;
  }
`;
const Info = styled.div`
  display: flex;
  align-items: center;

  strong {
    width: 240px;
    border: 3px solid #eae9f2;
    border-radius: 34px;
    padding: 10px 10px;
    margin-left: 20px;
    font-size: 18px;
    color: var(--gray);
    text-align: center;
  }
  small {
    color: var(--gray100);
    font-size: 18px;
  }
`;
