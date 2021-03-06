import React, { useState } from "react";

import styled from "styled-components";
export default function ToList() {
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
  };

  return (
    <Wrapper className="container">
      <div class="content">
        <h1>ToDo - List </h1>
        <input
          type="text"
          name="text"
          id="task"
          placeholder="New task..."
          onChange={(e) => handleChange(e)}
        />
        <input type="button" value="Add" id="button" onClick={addTask} />
      </div>
      {taskList !== [] ? (
        <ul>
          {taskList.map((t) => (
            <li className="listItem">
              {t.value}
              <button className="completed">Completed</button>
              <button className="delete" onClick={(e) => deleteTask(e, t.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </Wrapper>
  );
}

const Wrapper = styled.div``;
