import "../css/SideNavbar.css";

const SideNavbar = () => {
  return (
    <div className="sideNavbar">
      <div className="sideNavbarLinkGroup">
        <div className="sideNavbarLink">
          <div className="sideNavbarPartOne">
            <div className="sideNavbarButton">
              <div className="overviewImgDiv">
                <img
                  className="sideNavbarIcon"
                  alt=""
                  src="images/overview.png"
                />
              </div>
              <div className="overviewText">Overview</div>
            </div>
            <div className="sideNavbarProduct">
              <img
                className="sideNavbarIcon"
                alt=""
                src="images/products.png"
              />
              <div className="productsText">Products</div>
            </div>
            <div className="sideNavbarAnalytics">
              <img
                className="sideNavbarIcon"
                alt=""
                src="images/analytics.png"
              />
              <div className="analyticsText">Analytics</div>
            </div>
            <div className="sideNavbarSchedule">
              <img
                className="sideNavbarIcon"
                alt=""
                src="images/schedule.png"
              />
              <div className="analyticsText">Schedule</div>
            </div>
            <div className="sideNavbarPayout">
              <img className="sideNavbarIcon" alt="" src="images/payout.png" />
              <div className="analyticsText">Payout</div>
            </div>
            <div className="sideNavbarStatements">
              <img
                className="sideNavbarIcon"
                alt=""
                src="images/statements.png"
              />
              <div className="statementsText">Statements</div>
            </div>
          </div>
          <div className="sideNavbarPartTwo">
            <div className="sideNavbarButton">
              <img className="sideNavbarIcon" alt="" src="images/help.png" />
              <div className="helpText">Help</div>
            </div>
            <div className="sideNavbarProduct">
              <img
                className="sideNavbarIcon"
                alt=""
                src="images/community.png"
              />
              <div className="communityText">Community</div>
            </div>
            <div className="sideNavbarAnalytics">
              <img
                className="sideNavbarIcon"
                alt=""
                src="images/settings.png"
              />
              <div className="settingsText">Settings</div>
            </div>
            <div className="sideNavbarSchedule">
              <img className="sideNavbarIcon" alt="" src="images/logout.png" />
              <div className="communityText">Logout</div>
            </div>
          </div>
        </div>
        <div className="logo">LOGO</div>
      </div>
      <div className="line" />
    </div>
  );
};

export default SideNavbar;
