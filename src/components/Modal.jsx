import styled from "styled-components";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
export function Modal({ id = "modal", onClose = () => {} }) {
  const handleOutSideClick = (e) => {
    if (e.target.id === id) onClose();
  };

  const [inputValue, setInputValue] = useState("");
  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Wrapper onClick={handleOutSideClick} className="modal" id={id}>
      <Container>
        <Content>
          <h1>Write down your goal</h1>
          <footer>
            <input
              type="text"
              name="name"
              onChange={onChangeHandler}
              value={inputValue}
            />
            {/* <p>{inputValue}</p> */}
            <button onClick={onClose}>
              <FiPlus />
            </button>
          </footer>
        </Content>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  background: rgba(0, 0, 0, 0.5);

  top: 0;
  left: 0;
  position: absolute;
  z-index: 10;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;

  background: var(--white);
  width: 70%;
  height: 30%;
  border-radius: 5px;
`;
const Content = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h1 {
    text-align: center;
  }

  footer {
    display: flex;
    justify-content: space-between;
  }
  input {
    width: 100%;
    border: none;
    border-bottom: 1px solid var(--blue);
    font-size: 18px;
  }
  button {
    border: none;
    background: none;
    border-bottom: 1px solid var(--blue);
  }
  svg {
    color: var(--blue);
    width: 30px;
    height: 30px;
  }
`;
