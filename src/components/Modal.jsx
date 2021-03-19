import React, { useState } from "react";
import styled from "styled-components";
import { FiPlus } from "react-icons/fi";

function Modal({ id = "close", inputText, setInputText, setTodos, todos }) {
  //Modal ==========================================================================
  const [isModalVisible, setModalIsvisible] = useState(false);
  const handleOutSideClick = (e) => {
    if (e.target.id === "close") setModalIsvisible(false);
    console.log(e.target.value);
  };

  //Todo =============================================================================
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, Done: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
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
                  value={inputText}
                  onChange={inputTextHandler}
                  type="text"
                  name=""
                  id=""
                />

                <button
                  onClick={submitTodoHandler}
                  type="submit"
                  className="add-btn"
                >
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

  @keyframes fade {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .content {
    display: flex;
    justify-content: center;
    background: var(--white);
    min-width: 50%;
    height: 25%;
    border-radius: 5px;
    animation-name: fade;
    animation-duration: 500ms;
  }

  header h1 {
    font-size: 32px;
    text-align: center;
    color: var(--blue);
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
      outline: none;
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
