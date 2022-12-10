import SideNavbar from "./components/SideNavbar";
import Transactions from "./components/Transactions";
import AnalyticsReminder from "./components/AnalyticsReminder";
import Earnings from "./components/Earnings";
import TransferTeam from "./components/TransferTeam";
import Navbar from "./components/Navbar";
import "./css/Desktop1.css";
function App() {
  return (
    <div className="dashboard">
      <SideNavbar />
      <Navbar />
      <TransferTeam />
      <Transactions />
      <div className="line3" />
      <div className="FirstDiv">
        <AnalyticsReminder />
        <Earnings />
      </div>
    </div>
  );
}
export default App;
