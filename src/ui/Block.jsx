import styled from "styled-components";
import AreaPieChart from "../features/dashboard/AreaPieChart";
import Template from "./Template";

const StyledBlock = styled.div`
  display: grid;
  grid-template-columns: 9fr 7fr;
  gap: 2.4rem;

  @media (max-width: 57rem) {
    grid-template-columns: 1fr;
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
