import React, { useState } from "react";
import styled from "styled-components";
import { MdKeyboard } from "react-icons/md";

function Keyboard() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Wrapper>
      <button
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        <MdKeyboard />
      </button>
      {isVisible ? (
        <KeyboardContainer>
          <Shortcut>
            <h1>CTRL</h1>
            <p>Add New To-do</p>
          </Shortcut>
          <Shortcut>
            <h1>D</h1>
            <p>Toggle Done Panel</p>
          </Shortcut>
          <Shortcut>
            <h1>A</h1>
            <p>Toggle All Panel</p>
          </Shortcut>
          <Shortcut>
            <h1>T</h1>
            <p>Toggle To-do Panel</p>
          </Shortcut>
        </KeyboardContainer>
      ) : null}
    </Wrapper>
  );
}

export default Keyboard;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 30px;
  right: 85px;

  svg {
    color: var(--gray200);
    cursor: pointer;
    position: fixed;
    right: 50px;
    top: 25px;
    width: 30px;
    height: 30px;
  }
`;

const KeyboardContainer = styled.div`
  background: #fff;
  padding: 10px 20px 10px 10px;
  border-radius: 3px;
`;

const Shortcut = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--blue);
    color: #fff;
    font-size: 12px;
    width: 35px;
    height: 30px;
    margin: 5px;
    border-radius: 3px;
  }
  p {
    color: var(--gray200);
    font-weight: bold;
  }
`;
