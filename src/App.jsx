import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "./components/Modal";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import GlobalStyles from "./components/GlobalStyles";
import Keyboard from "./components/KeyMap";

function App() {
  // estados
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  // selecionar o status dos itens do select
  const [status, setStatus] = useState("All");

  // filtrar o estatus dos todos
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    saveLocalTodos();
    filteredHandler();
  }, [todos, status]);

  // manipular e filtrar os todos

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

  // Salvar em localStorage

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodo = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodo);
    }
  };

  return (
    <div className="App">
      <AppContainer>
        <Keyboard />
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
        <GlobalStyles />
      </AppContainer>
    </div>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 700px;
  display: flex;
  min-height: 600px;
  flex-direction: column;
  margin: 0 auto;
  padding: 50px 60px;
`;
const Header = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h1 {
    color: var(--blue);
    font-size: 42px;
    font-weight: 600;
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
