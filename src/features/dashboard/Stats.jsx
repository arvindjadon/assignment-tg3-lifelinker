import Stat from "./Stat";
import { BsHandbag } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { FaHandHoldingMedical } from "react-icons/fa";

function Stats() {
  return (
    <>
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
    </>
  );
}

export default Stats;
