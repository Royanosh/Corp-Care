import "../css/TransferTeam.css";

const TransferTeam = () => {
  return (
    <div className="transactionTeam">
      <div className="recentTransactionText">Recent Transactions</div>
      <div className="AmountDiv">
        <div className="transferTeam">
          <img className="groupIcon" alt="" src="images/teamIcon.png" />
          <div className="transferToYourTeamText">Transfer to your team.</div>
        </div>
        <div className="AmountTransfer">
          <div className="Amount">$450</div>
          <button className="transferButton">Transfer</button>
        </div>

        <div className="line2" />
        <div className="teamIcons">
          <img className="teamIcon1" alt="" src="images/team1.png" />
          <img className="teamIcon2" alt="" src="images/team2.png" />
          <img className="teamIcon2" alt="" src="images/team3.png" />
          <img className="teamIcon2" alt="" src="images/team4.png" />
          <img className="teamIcon2" alt="" src="images/team5.png" />
          <img className="teamIcon2" alt="" src="images/add.png" />
        </div>
      </div>
    </div>
  );
};

export default TransferTeam;
