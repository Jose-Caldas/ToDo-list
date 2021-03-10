import styled from "styled-components";
import React, { useState } from "react";
// import { FiPlus } from "react-icons/fi";
import "./Global.css";
import { Modal } from "./components/Modal";

function App() {
  const [inputValue, setInputValue] = useState("");
  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const [tab, setTab] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <Container>
      <Content>
        <header>
          <small>Created by</small>
          <strong>José Caldas</strong>
        </header>
        <h1>Keep productivity with DoList </h1>
        <h2>Tasks </h2>
        <Navtabs>
          <div>
            <button onClick={() => setTab("Todo")}>
              <p>To-do</p>
            </button>
            <button onClick={() => setTab("All")}>
              <p>All</p>
            </button>
            <button onClick={() => setTab("Done")}>
              <p>Done</p>
            </button>
          </div>

          <div>
            <input
              type="text"
              name="name"
              placeholder="new todo..."
              onChange={onChangeHandler}
              value={inputValue}
            ></input>
            <button onClick={() => setTab("Todo")} className="add">
              Add ToDo
            </button>
          </div>
        </Navtabs>

        <ContentTabs>
          <article>{tab === "Todo" && inputValue}</article>
          <article>{tab === "All" && "All"}</article>
          <article>{tab === "Done" && "Done"}</article>
        </ContentTabs>
        <Button onClick={() => setModalVisible(true)}>+</Button>
        {isModalVisible ? (
          <Modal onClose={() => setModalVisible(false)}></Modal>
        ) : null}
      </Content>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Content = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  min-height: 600px;
  flex-direction: column;
  margin: 0 auto;
  justify-content: space-around;
  padding: 0 10px;

  header small {
    color: var(--gray100);
    font-size: 18px;
  }
  header {
    display: flex;
    align-items: center;
  }
  header strong {
    width: 240px;
    border: 3px solid #eae9f2;
    border-radius: 34px;
    padding: 10px 10px;
    margin-left: 20px;
    font-size: 18px;
    color: var(--gray);
    text-align: center;
  }
  h1 {
    color: var(--blue);
    font-size: 42px;
    font-weight: bold;
  }
  h2 {
    color: var(--blue);
    font-size: 23px;
    font-weight: bold;
  }
`;

const Navtabs = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  input {
    border: none;
    border-bottom: 2px solid var(--blue);
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
    background: none;
    margin: 0 auto;
  }
  button p {
    font-size: 18px;
    font-weight: bold;
    color: var(--gray);
    cursor: pointer;
    position: relative;
    padding: 0 10px;
  }

  button p:hover {
    transition: all 0.3s ease;
  }
  button p:before {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    background: var(--blue);
    left: 0;
    bottom: 0;
    transition: all 0.3s ease;
  }
  p:hover::before {
    width: 100%;
    transition: all 0.3s ease;
  }

  .add {
    border: 1px solid var(--gray200);
    color: var(--blue);
    font-weight: bold;
    margin-left: 5px;
    padding: 5px;
    border-radius: 5px;
  }
`;
const ContentTabs = styled.div`
  color: var(--gray200);
`;

const Button = styled.div`
  margin: 0 auto;
  cursor: pointer;
  font-size: 40px;
  background: var(--blue);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: var(--white);
  text-align: center;
`;
