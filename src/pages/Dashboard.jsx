import styled from "styled-components";
import AreaBarChart from "../features/dashboard/AreaBarChart";
import Stats from "../features/dashboard/Stats";
import AreaLineChart from "../features/dashboard/AreaLineChart";
import Block from "../ui/Block";
import Table from "../ui/Table";

const data = [
  {
    name: "Rajouri Garden",
    "Last Month": 4000,
    "Current Month": 2400,
    amt: 2400,
  },
  {
    name: "Vasant Kunj",
    "Last Month": 3000,
    "Current Month": 1398,
    amt: 2210,
  },
  {
    name: "Patel Nagar",
    "Last Month": 2000,
    "Current Month": 9800,
    amt: 2290,
  },
  {
    name: "Tilak Nagar",
    "Last Month": 2780,
    "Current Month": 3908,
    amt: 2000,
  },
  {
    name: "Rohini",
    "Last Month": 1890,
    "Current Month": 4800,
    amt: 2181,
  },
  {
    name: "Lajpat Nagar",
    "Last Month": 2390,
    "Current Month": 3800,
    amt: 2500,
  },
  {
    name: "Hauz Khas",
    "Last Month": 3490,
    "Current Month": 4300,
    amt: 2100,
  },
  {
    name: "Saket",
    "Last Month": 3490,
    "Current Month": 4300,
    amt: 2100,
  },
  {
    name: "Dwarka",
    "Last Month": 3490,
    "Current Month": 4300,
    amt: 2100,
  },
];

const StyledDashboard = styled.div`
  display: grid;
  grid-template-rows: repeat(6, auto);
  gap: 2.4rem;
`;

function Dashboard() {
  return (
    <StyledDashboard>
      <Stats />
      <Block />
      <Table />
      <AreaBarChart data={data} />
      <AreaLineChart data={data} />
    </StyledDashboard>
  );
}

export default Dashboard;
