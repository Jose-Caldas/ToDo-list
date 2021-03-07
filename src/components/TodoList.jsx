import React, { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";

import styled from "styled-components";
export default function TodoList() {
  const [task, setTask] = useState("");
  const handleChange = (e) => {
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
  const [taskList, setTaskList] = useState([]);
  const deleteTask = (e, id) => {
    e.preventDefault();
    setTaskList(taskList.filter((t) => t.id !== id));
  };

  const taskCompleted = (e, id) => {
    e.preventDefault();
    //Let´s find index of element
    const element = taskList.findIndex((elem) => elem.id === id);

    //copy array into a new variable
    const newTaskList = [...taskList];

    // edit elememt
    newTaskList[element] = {
      ...newTaskList[element],
      isCompleted: true,
    };
    setTaskList(newTaskList);
  };

  return (
    <Wrapper className="container">
      <FormModal class="content">
        <input
          type="text"
          name="text"
          id="task"
          placeholder="New task..."
          onChange={(e) => handleChange(e)}
        />

        <input type="button" value="Add" id="button" onClick={addTask} />
      </FormModal>
      {taskList !== [] ? (
        <ul>
          {taskList.map((t) => (
            <li className={t.isCompleted ? "crosText" : "listItem"}>
              {t.value}
              <button
                className="completed"
                onClick={(e) => taskCompleted(e, t.id)}
              ></button>
              <button className="delete" onClick={(e) => deleteTask(e, t.id)}>
                <VscChromeClose />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  svg {
    color: red;
  }
  button {
    border: none;
    background: transparent;
    outline: none;
  }
`;
const FormModal = styled.div``;
