import "../css/RecentTransactionsChat.css";

const RecentTransactionsChat = () => {
  return (
    <div className="RecentTransactionsChat">
      <div className="chatDiv">
        <div className="textDiv">
          <div className="RecentTransactionsChatText">Recent Transactions</div>
        </div>
        <div className="chats">
          <div className="chatSection">
            <div className="chat">
              <div className="chatImgDiv">
                <img className="chatImg" alt="" src="images/jiko.png" />
              </div>
              <div className="chatDetails">
                <div className="chatTimeText">
                  <div className="JikoAppText">Jiko Mobile App</div>
                  <div className="chatTime">12 Nov 2021 4:45AM</div>
                </div>
                <div className="chatAmount">$15</div>
              </div>
            </div>
            <div className="chat">
              <div className="chatImgDiv">
                <img className="chatImg" alt="" src="images/jiko.png" />
              </div>
              <div className="chatDetails">
                <div className="chatTimeText">
                  <div className="JikoAppText">Jiko Mobile App</div>
                  <div className="chatTime">12 Nov 2021 4:45AM</div>
                </div>
                <div className="chatAmount">$15</div>
              </div>
            </div>
            <div className="chat">
              <div className="chatImgDiv">
                <img className="chatImg" alt="" src="images/jiko.png" />
              </div>
              <div className="chatDetails">
                <div className="chatTimeText">
                  <div className="JikoAppText">Jiko Mobile App</div>
                  <div className="chatTime">12 Nov 2021 4:45AM</div>
                </div>
                <div className="chatAmount">$15</div>
              </div>
            </div>
            <div className="chat">
              <div className="chatImgDiv">
                <img className="chatImg" alt="" src="images/jiko.png" />
              </div>
              <div className="chatDetails">
                <div className="chatTimeText">
                  <div className="JikoAppText">Jiko Mobile App</div>
                  <div className="chatTime">12 Nov 2021 4:45AM</div>
                </div>
                <div className="chatAmount">$15</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentTransactionsChat;
