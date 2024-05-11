import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const StyledAppLayout = styled.div`
  margin: 0 5rem;
  display: grid;
  grid-template-columns: 2fr 5fr;
  grid-template-rows: auto 1fr;
  gap: 3.5rem;
  height: 100vh;

  @media (max-width: 59rem) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    margin: 0 1rem;
    gap: 1rem;
  }

  @media (max-width: 34rem) {
    margin: 0 0.2rem;
    gap: 0;
  }
`;

const Main = styled.main`
  background-color: var(--color-background);
  grid-row: 1 / -1;
  grid-column: 2 / 3;
  overflow: scroll;

  @media (max-width: 59rem) {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
  }
`;

function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);

  function handleShowSidebar() {
    setIsOpen((isOpen) => !isOpen);
  }

  function handleReset() {
    setIsOpen(false);
  }

  return (
    <StyledAppLayout>
      <Header isOpen={isOpen} onShowSidebar={handleShowSidebar} />
      <Sidebar isOpen={isOpen} onReset={handleReset} />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
