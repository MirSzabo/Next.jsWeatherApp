const Forecast = ({ weatherData }) => {
  return (
    <div>
      Current temperature in {weatherData.name} is {weatherData.main.temp}{" "}
      &#176;C
    </div>
  );
};

export default Forecast;
