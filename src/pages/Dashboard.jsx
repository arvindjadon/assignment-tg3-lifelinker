import styled from "styled-components";
import DashboardLayout from "../ui/DashboardLayout";
import DashboardBar from "../features/dashboard/DashboardBar";

const StyledDashboard = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-column: 1fr;
  gap: 4rem;
  margin-top: 1.5rem;

  @media (max-width: 59rem) {
    margin-top: 0;
    gap: 2rem;
  }

  @media (max-width: 34rem) {
    gap: 1rem;
  }
`;

function Dashboard() {
  return (
    <StyledDashboard>
      <DashboardBar />
      <DashboardLayout />
    </StyledDashboard>
  );
}

export default Dashboard;
