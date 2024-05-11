import styled from "styled-components";
import { CiBellOn } from "react-icons/ci";
import Heading from "../../ui/Heading";
import Logo from "../../ui/Logo";
import Row from "../../ui/Row";
import TopRightDiv from "../../ui/TopRightDiv";
import DatePicker from "../../ui/DatePicker";

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

const StyledDashboardBar = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  justify-items: start;

  @media (max-width: 34rem) {
    grid-template-rows: repeat(2, auto);
  }
`;

const StyledRow = styled.div`
  @media (max-width: 34rem) {
    grid-row: 2 / 3;
  }
`;

function DashboardBar() {
  return (
    <StyledDashboardBar>
      <Heading as="h1">Dashboard</Heading>
      <StyledRow>
        <Row type="horizontal">
          <TopRightDiv text="Queue" />
          <DatePicker />
          <Bell>
            <CiBellOn />
          </Bell>
          <Logo type="small" />
        </Row>
      </StyledRow>
    </StyledDashboardBar>
  );
}

export default DashboardBar;
