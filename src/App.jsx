import styled from "styled-components";
import { MdKeyboard } from "react-icons/md";
import "./Global.css";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="App">
      <AppContainer>
        <MdKeyboard className="keyboard" />
        <Header>
          <small>Created by</small>
          <strong>José Caldas</strong>
        </Header>
        <h1>Keep productivity with DoList </h1>
        <h2>Tasks </h2>

        <Modal />
      </AppContainer>
    </div>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 800px;
  display: flex;
  justify-content: space-around;
  min-height: 600px;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 10px;
  h1 {
    color: var(--blue);
    font-size: 42px;
    font-weight: bold;
  }
  h2 {
    color: var(--blue);
    font-size: 23px;
    font-weight: bold;
  }
`;
const Header = styled.div`
  display: flex;
  align-items: center;

  small {
    color: var(--gray100);
    font-size: 18px;
  }
  strong {
    width: 240px;
    border: 3px solid #eae9f2;
    border-radius: 34px;
    padding: 10px 10px;
    margin-left: 20px;
    font-size: 18px;
    color: var(--gray);
    text-align: center;
  }
`;
