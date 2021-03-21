import React, { useState } from "react";
import styled from "styled-components";
import { MdKeyboard } from "react-icons/md";

function Keyboard() {
  const [isVisible, setIsVisible] = useState(false);

  const shortcuts = [
    { icon: "N", description: "Add new todo" },
    { icon: "D", description: "Toggle Done Panel" },
    { icon: "A", description: "Toggle All Panel" },
    { icon: "T", description: "Toggle To-do Panel" },
  ];

  return (
    <Container>
      <button
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        <MdKeyboard />
      </button>
      {isVisible ? (
        <Box>
          <ShortcutList>
            {shortcuts.map((shortcut) => (
              <Shortcut key={shortcut.icon}>
                <Icon>{shortcut.icon}</Icon>
                <Description>{shortcut.description}</Description>
              </Shortcut>
            ))}
          </ShortcutList>
        </Box>
      ) : null}
    </Container>
  );
}

export default Keyboard;

const Box = styled.div`
  padding: 16px;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  background: white;
  position: absolute;
  top: 20px;
  left: -180px;
`;

const Container = styled.div`
  cursor: pointer;
  position: absolute;
  right: 5%;
  top: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;

  svg {
    fill: var(--gray200);
    width: 40px;
    height: 40px;
    padding: 5px;
  }
`;

const Shortcut = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
const ShortcutList = styled.div`
  display: flex;
  flex-direction: column;
  > li:last-child {
    margin-bottom: 0;
  }
`;
const Icon = styled.div`
  margin: 0px 0.8em 0 0;
  padding: 0.1em 0.6em;
  border-radius: 3px;
  border: 1px solid rgb(204, 204, 204);
  color: var(--white);
  line-height: 1.4;
  font-size: 16px;

  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2), inset 0px 0px 0px 2px #ffffff;
  background-color: var(--blue);
  text-shadow: 0 1px 0 #fff;
`;

const Description = styled.p`
  font-size: 14px;
  margin-bottom: 0;
  color: var(--gray200);
`;
