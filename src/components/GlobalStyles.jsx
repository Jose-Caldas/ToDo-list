import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  --white: #fbfcff;
  --blue: #331cbf;
  --blue100:#8f83d1;
  --gray: #45475d;
  --gray100: #c2c4d9;
  --gray200: #a9aab6;
  --gray300: #eae9f2;
  --red: #f56a6a;
 
}

*{
    margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Source Sans Pro", sans-serif;
}
body{
    background-color: #f6f7fb;
  
}

body svg.keyboard {
  color: var(--gray200);
  cursor: pointer;
  position: fixed;
  right: 50px;
  top: 25px;
  width: 30px;
  height: 30px;
}


ul,
li {
  list-style: none;
}
input,
button {
  outline: none;
}

button {
  border: none;
  outline: none;
  cursor: pointer;
  background: none;
}

`;
