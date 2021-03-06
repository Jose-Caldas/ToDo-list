// import { FiPlus } from "react-icons/fi";
import styled from "styled-components";

export function Modal({ id = "modal", onClose = () => {}, children }) {
  //   const { children } = props;      // forma estruturada

  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };

  return (
    <Wrapper id={id} className="modal" onClick={handleOutsideClick}>
      <div className="container">
        <button className="close" onClick={onClose}>
          +
        </button>
        <div className="content">{children}</div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #fff;
    width: 60%;
    height: 30%;
    border-radius: 20px;

    h1 {
      color: var(--blue);
      font-weight: 700;
    }

    .close {
      background: transparent;
      cursor: pointer;
      border: none;
      outline: none;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      right: -291px;
      top: 29px;
      padding: 10px;

      position: relative;
      right: -293px;
      top: 126px;

      color: var(--blue);
      font-size: 30px;

      /* ::before,
      ::after {
        content: "";
        position: absolute;
        width: 2.5px;
        height: 24px;
        background-color: red;
      }
      ::before {
        transform: rotate(45deg);
      }
      ::after {
        transform: rotate(-45deg);
      } */
    }
  }
`;
