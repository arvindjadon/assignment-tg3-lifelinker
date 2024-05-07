import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Heading from "../../ui/Heading";
import DashboardBox from "./DashboardBox";

function AreaBarChart({ data }) {
  return (
    <DashboardBox>
      <Heading as="h2">Areas</Heading>
      <ResponsiveContainer height={300} width="100%">
        <BarChart
          width={1100}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Current Month" fill="var(--color-blue-200)" />
          <Bar dataKey="Last Month" fill="var(--color-blue-100)" />
        </BarChart>
      </ResponsiveContainer>
    </DashboardBox>
  );
}

export default AreaBarChart;
