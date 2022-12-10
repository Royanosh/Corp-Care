import "../css/Reminder.css";

const Reminder = () => {
  return (
    <div className="Remender">
      <div className="remenderText">Reminder</div>
      <div className="RemenderSection">
        <div className="agencyText">Agency Design Kit</div>
        <img className="agencyImg" alt="" src="images/figma.png" />
        <div className="DateSection">
          <span className="DateText">
            <p className="publishedText">Will be published</p>
            <p className="date">Nov 25, 2022</p>
          </span>
        </div>
        <button className="reminderButton">
          <div className="reminderText">Set as Reminder</div>
        </button>
      </div>
    </div>
  );
};

export default Reminder;
