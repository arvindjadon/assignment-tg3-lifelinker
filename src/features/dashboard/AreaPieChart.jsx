import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Legend,
  Cell,
  Tooltip,
} from "recharts";
import Heading from "../../ui/Heading";
import DashboardBox from "./DashboardBox";

const data = [
  {
    name: "Rajouri Garden",
    value: 7000,
    color: "#11cdf0",
  },
  {
    name: "Patel Nagar",
    value: 1100,
    color: "#8585ff",
  },
  {
    name: "Vasant Kunj",
    value: 3500,
    color: "#45d798",
  },
  {
    name: "Tilak Nagar",
    value: 1700,
    color: "#2196f3",
  },
  {
    name: "Dwarka",
    value: 1750,
    color: "#fd5f54",
  },
  {
    name: "Saket",
    value: 2200,
    color: "#ffe747",
  },
];

function AreaPieChart() {
  return (
    <DashboardBox>
      <Heading as="h2">Areas</Heading>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            dataKey="value"
            data={data}
            innerRadius={65}
            outerRadius={90}
            fill="#8884d8"
          >
            {data.map((entry) => (
              <Cell fill={entry.color} stroke={entry.color} key={entry.name} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="middle"
            align="right"
            width="30%"
            layout="vertical"
            iconSize={18}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </DashboardBox>
  );
}

export default AreaPieChart;
