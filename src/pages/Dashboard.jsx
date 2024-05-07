import DashboardLayout from "../features/dashboard/DashboardLayout";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";
import Row from "../ui/Row";
import TopRightDiv from "../ui/TopRightDiv";

function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <Row type="horizontal">
          <TopRightDiv text="Queue" />
          <TopRightDiv text="1 Feb, 2024 - 4 Mar, 2024" />
          <p>Red Bell</p>
          <Logo type="small" />
        </Row>
      </Row>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
