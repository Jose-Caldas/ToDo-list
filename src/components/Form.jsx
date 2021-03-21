import React from "react";
import styled from "styled-components";

function Form({ setStatus }) {
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <FormContainer onChange={statusHandler}>
      <div className="status-btn">
        <button onClick={() => setStatus("Todo")}>To-Do</button>
        <button onClick={() => setStatus("All")}>All</button>
        <button onClick={() => setStatus("Done")}>Done</button>
      </div>
    </FormContainer>
  );
}

export default Form;

const FormContainer = styled.div`
  color: white;
  padding: 40px 0;

  .status-btn {
    display: flex;
    justify-content: center;
  }
  button {
    width: 10%;
    font-size: 18px;
    color: var(--gray);
    font-weight: bold;
    margin-right: 30px;
    position: relative;
    &:focus {
      color: var(--blue);

      box-shadow: 1px 1px 4px var(--gray200);
      border-radius: 3px;
    }
    .dourado {
      background-color: blue;
    }
  }
`;
