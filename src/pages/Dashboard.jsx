import styled from "styled-components";
import DashboardLayout from "../ui/DashboardLayout";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";
import Row from "../ui/Row";
import TopRightDiv from "../ui/TopRightDiv";
import { CiBellOn } from "react-icons/ci";

const Bell = styled.div`
  width: 4rem;
  height: 4rem;
  border: 1px solid var(--color-bell);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-background);

  & svg {
    width: 3.2rem;
    height: 3.2rem;
    color: var(--color-bell);
  }
`;

const StyledDashboard = styled.div`
  display: grid;
  grid-template-rows: repeat(6, auto);
  gap: 4rem;
`;

function Dashboard() {
  return (
    <StyledDashboard>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <Row type="horizontal">
          <TopRightDiv text="Queue" />
          <TopRightDiv text="1 Feb, 2024 - 4 Mar, 2024" />
          <Bell>
            <CiBellOn />
          </Bell>
          <Logo type="small" />
        </Row>
      </Row>

      <DashboardLayout />
    </StyledDashboard>
  );
}

export default Dashboard;
