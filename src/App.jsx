import styled from "styled-components";
import React, { useState } from "react";
// import { FiPlus } from "react-icons/fi";
import "./Global.css";
import { Modal } from "./components/Modal";

function App() {
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
          <ul>
            <li>
              <input
                onChange={() => setTab("Todo")}
                type="radio"
                name="tabs"
                class="rd-tabs"
                id="tab1"
              />
              <label for="tab1">Todo</label>
            </li>
            <li>
              <input
                onChange={() => setTab("All")}
                type="radio"
                name="tabs"
                class="rd-tabs"
                id="tab2"
              />
              <label for="tab2">All</label>
            </li>
            <li>
              <input
                onChange={() => setTab("Done")}
                type="radio"
                name="tabs"
                class="rd-tabs"
                id="tab3"
              />
              <label for="tab3">Done</label>
            </li>
          </ul>
        </Navtabs>
        <ContentTabs>
          <article>{tab === "Todo" && "Todo"}</article>
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

  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    width: 100%;
    padding: 0 10px;
    /* margin-right: 50px; */
    font-size: 18px;
    font-weight: bold;
    color: var(--gray200);
    cursor: pointer;
  }

  .rd-tabs:checked ~ label {
    border-bottom: 2px solid var(--blue);
    position: relative;
  }

  .rd-tabs ~ label:hover {
    border-bottom: 2px solid var(--blue);
  }

  .rd-tabs {
    display: none;
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
