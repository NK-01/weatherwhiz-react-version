export default function Time(props) {
  let dt = new Date(props.time * 1000);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dt.getDay()];
  let minutes = dt.getMinutes();
  if (minutes < 10) minutes = "0" + minutes;
  let hours = dt.getHours();
  if (hours < 10) hours = "0" + hours;
  return (
    <div className="Time">
      <li>
        Last Updated: {day}, {hours}:{minutes}
      </li>
    </div>
  );
}
