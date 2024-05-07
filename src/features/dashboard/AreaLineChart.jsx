import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import DashboardBox from "./DashboardBox";
import Heading from "../../ui/Heading";

function AreaLineChart({ data }) {
  return (
    <DashboardBox>
      <Heading as="h2">Areas</Heading>
      <ResponsiveContainer height={300} width="100%">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Current Month"
            stroke="var(--color-blue-200)"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="Last Month"
            stroke="var(--color-blue-100)"
          />
        </LineChart>
      </ResponsiveContainer>
    </DashboardBox>
  );
}

export default AreaLineChart;
