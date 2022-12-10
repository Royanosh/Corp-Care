import RecentTransactionsChat from "../components/RecentTransactionsChat";
import RecentTransactionsChart from "../components/RecentTransactionsChart";
import "../css/Transactions.css";

const Transactions = () => {
  return (
    <div className="Transactions">
      <RecentTransactionsChat />
      <RecentTransactionsChart />
    </div>
  );
};

export default Transactions;
