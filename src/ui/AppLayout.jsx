import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const StyledAppLayout = styled.div`
  padding: 0 5rem;
  display: grid;
  grid-template-columns: 2fr 5fr;
  grid-template-rows: auto 1fr;
  gap: 3.5rem;
  height: 100vh;
  /* max-width: 192rem; */
`;

const Main = styled.main`
  background-color: var(--color-background);
  grid-row: 1 / -1;
  grid-column: 2 / 3;
  overflow: scroll;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
