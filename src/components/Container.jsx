import React, { useState } from "react";
import styled from "styled-components";
// import { FiCalendar } from "react-icons/fi";
// import { VscChromeClose } from "react-icons/vsc";
import { Modal } from "./Modal";
import NavTabs from "./NavTabs";
// import TodoList from "./TodoList";
import FormModal from "./TodoList";

export default function Container() {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <Component>
      <Content>
        <header>
          <small>Created by</small>
          <strong>José Caldas</strong>
        </header>
        <h1>Keep productivity with DoList </h1>
        <h2>Tasks </h2>

        <Main>
          <NavTabs />
        </Main>
        <Button onClick={() => setModalVisible(true)}>
          <small>+</small>
        </Button>
        {isModalVisible ? (
          <Modal onClose={() => setModalVisible(false)}>
            <h1>Write down your goal</h1>
            <FormModal />
          </Modal>
        ) : null}
        {/* <TodoList /> */}
      </Content>
    </Component>
  );
}

const Component = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
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
  ul {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
  ul li {
    font-size: 18px;
    color: var(--gray200);
    cursor: pointer;
  }
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;

  .menuLeft {
    display: flex;
    align-items: center;
  }

  .menuLeft h1 {
    width: 30px;
    height: 30px;
    border-radius: 50px;
    background: var(--blue);
  }
  .menuLeft p {
    font-size: 18px;
    color: rgba(69, 71, 93, 0.45);
    margin-left: 15px;
    font-weight: 600;
  }

  .menuRight {
    width: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .menuRight h3 {
    font-size: 12px;
    font-weight: 600;
    color: var(--gray200);
  }
  .menuRight svg {
    color: var(--gray200);
  }

  .menuRight span svg {
    color: red;
  }
`;

const Button = styled.small`
  width: 100%;
  background: var(--blue);

  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  color: #fff;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
