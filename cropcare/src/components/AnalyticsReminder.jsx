import Analytics from "../components/Analytics";
import Reminder from "../components/Reminder";
import "../css/AnalyticsReminder.css";

const AnalyticsReminder = () => {
  return (
    <div className="AnalyticsReminder">
      <Analytics />
      <Reminder />
    </div>
  );
};

export default AnalyticsReminder;
