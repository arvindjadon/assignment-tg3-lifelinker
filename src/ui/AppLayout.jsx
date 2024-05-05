import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const StyledAppLayout = styled.div`
  max-width: 130rem;
`;

const Container = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 5fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  max-width: 120rem;
  background-color: green;
  overflow: hidden;
`;

const Main = styled.main`
  background-color: #222;
  padding: 4rem 4.8rem 6.4rem;
`;

const OutletContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  background-color: yellow;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Container>
        <Sidebar />
        <Main>
          <OutletContainer>
            <Outlet />
          </OutletContainer>
        </Main>
      </Container>
    </StyledAppLayout>
  );
}

export default AppLayout;
