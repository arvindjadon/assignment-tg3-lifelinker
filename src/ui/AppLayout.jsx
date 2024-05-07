import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const StyledAppLayout = styled.div`
  padding: 0 5rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  /* max-width: 192rem; */
`;

const Main = styled.main`
  background-color: var(--color-background);
  padding: 2rem 4.8rem 6.4rem;

  display: grid;
  grid-template-columns: 1fr 2.5fr;
  gap: 2rem;
`;

const Container = styled.div`
  overflow: scroll;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <Sidebar />
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
