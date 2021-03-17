import React from "react";
import "../Global.css";
import styled from "styled-components";

function Form({ setStatus }) {
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <FormContainer>
      <div on className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="All">All</option>
          <option value="Done">Done</option>
          <option value="Todo">Todo</option>
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
`;
