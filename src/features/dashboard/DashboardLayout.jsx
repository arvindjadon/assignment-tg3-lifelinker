import Card from "../../ui/Card";
import Table from "../../ui/Table";
import AreaChart from "./AreaChart";
import AreaPieChart from "./AreaPieChart";
import DurationGraph from "./DurationGraph";

function DashboardLayout() {
  return (
    <div>
      <p>DashboardLayout</p>
      <Card />
      <AreaPieChart />
      <Table />
      <AreaChart />
      <DurationGraph />
    </div>
  );
}

export default DashboardLayout;
