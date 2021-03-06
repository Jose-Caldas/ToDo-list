import React, { useState } from "react";
import styled from "styled-components";
import { FiCalendar } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";
import { Modal } from "./Modal";
// import { FiPlus } from "react-icons/fi";

export default function Container() {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <Content>
      <header>
        <small>Created by</small>
        <strong>José Caldas</strong>
      </header>
      <h1>Keep productivity with DoList </h1>
      <h2>Tasks </h2>
      <ul>
        <li>To-do</li>
        <li>All</li>
        <li>Done</li>
      </ul>
      <Main>
        <div className="menuLeft">
          <h1> </h1>
          <p>
            <p>Do Homework</p>
          </p>
        </div>

        <div className="menuRight">
          <h3>12/13 às 12:30</h3>
          <FiCalendar />
          <span>
            <VscChromeClose />
          </span>
        </div>
      </Main>
      <Button>
        <button onClick={() => setModalVisible(true)}>+</button>
      </Button>
      {isModalVisible ? (
        <Modal onClose={() => setModalVisible(false)}>
          <h1>Write down your goal</h1>
        </Modal>
      ) : null}
    </Content>
  );
}

const Content = styled.div`
  width: 800px;
  display: flex;
  height: 600px;
  flex-direction: column;
  margin: 60px auto;
  justify-content: space-around;

  header small {
    color: var(--gray100);
    font-size: 18px;
  }
  header strong {
    width: 240px;
    border: 3px solid #eae9f2;
    border-radius: 34px;
    padding: 10px 60px;
    margin-left: 20px;
    font-size: 18px;
    color: var(--gray);
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
    width: 600px;
    display: flex;
    justify-content: space-evenly;
  }
  ul li {
    font-size: 18px;
    color: var(--gray200);
  }
  ul li:last-child {
    color: var(--blue);
    font-weight: bold;
    border-bottom: 2px solid var(--blue);
  }
`;

const Main = styled.div`
  width: 600px;
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

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;

  button {
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
  }
`;
