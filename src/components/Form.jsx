import React from "react";
import styled from "styled-components";

function Form({ setStatus }) {
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <FormContainer>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="All">All</option>
          <option value="Done">Done</option>
          <option value="Todo">To-Do</option>
        </select>
      </div>
    </FormContainer>
  );
}

export default Form;

const FormContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .filter-todo {
    padding: 1rem;
    background: none;
    border-bottom: 1px solid var(--gray200);
  }
  select {
    outline: none;
    border: none;
    color: var(--blue);
    font-weight: bold;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 18px;
    cursor: pointer;
    width: 8rem;

    option {
    }
  }
  .select {
    display: flex;
    justify-content: flex-end;
    margin: 1rem;
    position: relative;
  }
`;
