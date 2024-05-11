import styled from "styled-components";
import AreaPieChart from "../features/dashboard/AreaPieChart";
import Template from "./Template";

const StyledBlock = styled.div`
  display: grid;
  grid-template-columns: 9fr 7fr;
  gap: 2.4rem;

  @media (max-width: 59rem) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 34rem) {
    gap: 1rem;
  }
`;

function Block() {
  return (
    <StyledBlock>
      <Template />
      <AreaPieChart />
    </StyledBlock>
  );
}

export default Block;
