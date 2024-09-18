// import { AreaCards, AreaCharts, AreaTable, AreaTop } from "../../../components";
import AreaTop from "../../../components/Admin/AreaTop/AreaTop";
import AreaCards from "../../../components/Admin/AreaCards/AreaCards";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import './Dashboard.css'

const Dashboard = () => {
  return (
    <main >
      {/* left of page */}
      <Sidebar />
      {/* right side/content of the page */}
      <div className="content-wrapper">
        <AreaTop />
        <AreaCards />
        {/* <AreaCharts />
        <AreaTable /> */}
      </div>
    </main>
  );
};

export default Dashboard;