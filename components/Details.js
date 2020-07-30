const Details = ({ weatherData }) => {
  const {
    sys: { sunrise, sunset },
    main: { temp, humidity, feels_like },
    wind: { speed },
  } = weatherData;

  const formatTime = (time) => {
    return time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };
  const dateSunrise = formatTime(new Date(sunrise * 1000));
  const dateSunset = formatTime(new Date(sunset * 1000));
  return (
    <>
      <h3>Details</h3>
      <span>
        <b>Temperature: </b>
        {temp} <span>&#8451;</span>
        <div>
          <b>Feels like: </b>
          {feels_like} <span>&#8451;</span>
        </div>
      </span>
      <div>
        <b>Wind: </b>
        {speed} kph
      </div>
      <div>
        <b>Humidity: </b>
        {humidity} %
      </div>
      <div>
        <b>Sunrise: </b>
        {dateSunrise}
      </div>
      <div>
        <b>Sunset: </b>
        {dateSunset}
      </div>
    </>
  );
};

export default Details;
