const Forecast = ({ weatherData }) => {
  return (
    <div>
      <ul>
        <li>
          Current temperature in {weatherData.name} is {weatherData.main.temp}{" "}
          &#176;C
        </li>
      </ul>
    </div>
  );
};

export default Forecast;
