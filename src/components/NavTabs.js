import styled from "styled-components";
export default function NavTabs() {
  return (
    <Container>
      <nav class="nav-tabs">
        <ul>
          <li>
            <input type="radio" name="tabs" class="rd-tabs" id="tab1" />
            <label for="tab1">To-do</label>
            <div class="content">
              <article>Todos List</article>
            </div>
          </li>
          <li>
            <input type="radio" name="tabs" class="rd-tabs" id="tab2" />
            <label for="tab2">All</label>
            <div class="content">
              <article>All todos</article>
            </div>
          </li>
          <li>
            <input type="radio" name="tabs" class="rd-tabs" id="tab3" />
            <label for="tab3">Done</label>
            <div class="content">
              <article>Todos completed</article>
            </div>
          </li>
        </ul>
      </nav>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 300px;

  .nav-tabs {
    width: 70%;
  }

  .nav-tabs ul {
    list-style: none;
  }
  .nav-tabs ul li {
    width: 100%;
    text-align: center;
  }

  .nav-tabs label {
    width: 100%;
    padding: 0 10px;
    font-size: 18px;
    color: var(--gray200);
    color: var(--);
    cursor: pointer;
  }

  .rd-tabs:checked ~ label {
    border-bottom: 2px solid var(--blue);
    position: relative;
  }

  .rd-tabs ~ label:hover {
    border-bottom: 2px solid var(--blue);
  }

  .rd-tabs {
    display: none;
  }

  .content {
    width: 100%;
    background-color: white;
    display: none;
  }

  .rd-tabs:checked ~ .content {
    display: block;
  }

  .content article {
    padding: 10px;
    text-align: justify;
    background-color: var(--white);
  }
`;
