import styled from "styled-components";
import React, { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { FcCalendar } from "react-icons/fc";
import { MdKeyboard } from "react-icons/md";

import "./Global.css";
import { Modal } from "./components/Modal";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const onChangeHandler = (event) => {
    setTask(event.target.value);
  };

  const addTask = () => {
    if (task !== "") {
      const taskDetail = {
        id: Math.floor(Math.random() * 1000),
        value: task,
        isCompleted: false,
      };
      setTaskList([...taskList, taskDetail]);
    }
  };

  const deleteTask = (e, id) => {
    e.preventDefault();
    setTaskList(taskList.filter((t) => t.id !== id));
  };

  const taskCompleted = (e, id) => {
    e.preventDefault();
    const element = taskList.findIndex((elem) => elem.id === id);
    const newTaskList = [...taskList];
    newTaskList[element] = {
      ...newTaskList[element],
      isCompleted: true,
    };
    setTaskList(newTaskList);
  };

  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <Container>
      <Content>
        <MdKeyboard className="keyboard" />
        <header>
          <small>Created by</small>
          <strong>José Caldas</strong>
        </header>
        <h1>Keep productivity with DoList </h1>
        <h2>Tasks </h2>
        <Navtabs>
          <div>
            <TabItem isActive={task === "Todo"} onClick={addTask}>
              <p>To-do</p>
            </TabItem>
            {/* <TabItem isActive={task === "All"} onClick={() => setTask("All")}>
              <p>All</p>
            </TabItem>
            <TabItem isActive={task === "Done"} onClick={() => setTask("Done")}>
              <p>Done</p>
            </TabItem> */}
          </div>

          <div>
            <input
              type="text"
              name="name"
              placeholder="new todo..."
              onChange={(e) => onChangeHandler(e)}
              value={task}
            ></input>
            <button onClick={addTask} className="add">
              Add ToDo
            </button>
          </div>
        </Navtabs>

        <ContentTabs>
          {taskList !== [] ? (
            <article>
              {taskList.map((t) => (
                <label className="contentArticle">
                  <div>
                    <input
                      className="completed"
                      type="checkbox"
                      name="done"
                      id="done"
                      onClick={(e) => taskCompleted(e, t.id)}
                    />
                    <div className="completeTask">
                      <p className={t.isCompleted ? "crossText" : "listItem"}>
                        {t.value}
                      </p>
                    </div>
                  </div>
                  <div className="nav-left">
                    <small>{Date()}</small>
                    <span>
                      <FcCalendar />
                    </span>
                    <button
                      className="delete"
                      onClick={(e) => deleteTask(e, t.id)}
                    >
                      <VscChromeClose />
                    </button>
                  </div>
                </label>
              ))}
            </article>
          ) : null}

          {/* <article>{task === "All" && "All"}</article>
          <article>{task === "Done" && "Done"}</article> */}
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

export function ModalB() {}

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

const TabItem = styled.button`
  border-bottom: ${(props) => (props.isActive ? " 1px solid var(--blue)" : "")};
`;

const ContentTabs = styled.div`
  article {
    color: var(--gray200);
    width: 100%;
    height: 200px;
    overflow-y: auto;
  }

  article div {
    display: flex;
    align-items: center;
  }

  .contentArticle {
    display: flex;
    justify-content: space-between;
  }

  .contentArticle p {
    color: var(--gray200);
    margin-left: 10px;
  }

  .contentArticle button {
    margin: 0 20px;
    color: red;
  }

  .nav-left {
  }
  .nav-left span {
    margin-left: 10px;
  }
  .completeTask {
  }

  .nav-left svg {
    display: block;
    color: red;
  }
  .crossText {
    text-decoration: line-through;
    font-style: italic;
    color: var(--blue);
  }
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
