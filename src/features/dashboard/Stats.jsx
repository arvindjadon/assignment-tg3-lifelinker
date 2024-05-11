import Stat from "./Stat";
import { BsHandbag } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { FaHandHoldingMedical } from "react-icons/fa";
import styled from "styled-components";

const StyledStats = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 85rem) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, 1fr);
  }

  @media (max-width: 59rem) {
    gap: 1.5rem;
  }

  @media (max-width: 34rem) {
    gap: 1rem;
  }
`;

function Stats() {
  return (
    <StyledStats>
      <Stat
        title="Leads"
        color="green"
        icon={<BsHandbag />}
        value={45643}
        text="3.75%"
      />
      <Stat
        title="Appointments"
        color="red"
        icon={<IoIosPeople />}
        value={35643}
        text="2.75%"
      />
      <Stat
        title="Visits"
        color="red"
        icon={<FaHandHoldingMedical />}
        value={27643}
        text="1.75%"
      />
      <Stat
        title="Conversion"
        color="green"
        icon={<BsHandbag />}
        value={20643}
        text="3.75%"
      />
    </StyledStats>
  );
}

export default Stats;
