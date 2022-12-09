import "../css/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="userSearch">
        <div className="user">
          <h3 className="userName">Hello, John</h3>
          <img className="helloIcon" alt="" src="images/hi.png" />
        </div>
        <div className="searchDiv">
          <img className="searchIcon" alt="" src="images/searchIcon.png" />
          <input
            className="searchInput"
            type="text"
            placeholder="Search"
            maxLength={339}
          />
        </div>
      </div>
      <div className="accountSection">
        <div className="mailIcon" />
        <div className="randomIcon" />
        <div className="userIcon" />
      </div>
    </div>
  );
};

export default Navbar;
