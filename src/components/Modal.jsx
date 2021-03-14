import React, { useState } from "react";
import styled from "styled-components";
import { FiPlus } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FcCalendar } from "react-icons/fc";
// import { BiSquareRounded } from "react-icons/bi";

function Modal({ id = "close" }) {
  //Modal ==========================================================================
  const [isModalVisible, setModalIsvisible] = useState(false);
  const handleOutSideClick = (e) => {
    if (e.target.id === "close") setModalIsvisible(false);
    console.log(e.target.value);
  };

  //Todo =============================================================================

  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const inputTextHandler = (e) => {
    setTask(e.target.value);
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

  return (
    <div>
      {isModalVisible ? (
        <ModalContainer onClick={handleOutSideClick} id={id}>
          <div className="content">
            <div className="modal">
              <header>
                <h1>Write down your goal</h1>
              </header>
              <footer>
                <input
                  onChange={(e) => inputTextHandler(e)}
                  type="text"
                  name=""
                  id=""
                />

                <button className="add-btn" onClick={addTask}>
                  <FiPlus />
                </button>
                <button
                  className="close-modal"
                  onClick={() => setModalIsvisible(false)}
                >
                  OK
                </button>
              </footer>
            </div>
          </div>
        </ModalContainer>
      ) : null}

      <NavContainer>
        <Titles>
          <p>todo</p>
          <p>All</p>
          <p>Done</p>
        </Titles>
        <NavContent>
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
                      <MdClose />
                    </button>
                  </div>
                </label>
              ))}
            </article>
          ) : null}
        </NavContent>
      </NavContainer>

      <OpenModalButton onClick={() => setModalIsvisible(true)}>
        +
      </OpenModalButton>
    </div>
  );
}

export default Modal;

const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);

  .content {
    display: flex;
    justify-content: center;
    background: var(--white);
    min-width: 50%;
    height: 25%;
    border-radius: 5px;
  }

  header h1 {
    font-size: 30px;
    text-align: center;
  }

  .modal {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    footer {
      display: flex;
      justify-content: space-between;
    }

    input {
      width: 100%;
      border: none;
      border-bottom: 1px solid var(--blue);
      font-size: 18px;
      color: var(--blue);
      background: transparent;
    }
    button.add-btn {
      border: none;
      background: none;
      border-bottom: 1px solid var(--blue);
      cursor: pointer;
    }
    button.add-btn svg {
      color: var(--blue);
      width: 30px;
      height: 30px;
    }
    button.close-modal {
      background-color: var(--blue);
      padding: 0 10px;
      border-radius: 5px;
      color: var(--white);
      cursor: pointer;
    }
    button.close-modal:hover {
      opacity: 0.8;
    }
  }
`;

const OpenModalButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  cursor: pointer;
  font-size: 40px;
  background: var(--blue);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #fff;
  text-align: center;
  margin-top: 20px;
`;

const NavContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;

  flex-direction: column;
`;

const Titles = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;

  p {
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    color: var(--gray);
    position: relative;
  }

  p:hover {
    transition: all 0.3s ease;
  }
  p:before {
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
`;
const NavContent = styled.div`
  width: 80%;
  article {
    color: var(--gray200);
    width: 100%;
    height: 150px;
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

  p {
    color: var(--gray200);
    margin-left: 12px;
  }

  small {
    font-size: 10px;
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
  .completeTask p {
    color: var(--gray);
    font-size: 18px;
  }

  .nav-left svg {
    display: block;
  }
  .crossText {
    text-decoration: line-through;
    font-style: italic;
    color: var(--gray);
  }

  .listItem p {
    font-size: 18px;
    color: blue;
  }
  .delete {
    background: none;
  }
`;
