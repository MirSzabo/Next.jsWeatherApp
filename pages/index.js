import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";

const capital = "Copenhagen";
const api = "https://api.openweathermap.org/data/2.5/weather?q=";
const cityName = capital.toLowerCase();
const key = process.env.API_KEY;
const units = "&units=metric";
const url = api + cityName + key + units;

const WeatherApp = () => (
  <Layout>
    <div>
      <h1>Weather Forecast</h1>
    </div>
  </Layout>
);

WeatherApp.getInitialProps = async () => {
  const res = await fetch(url);
  const weatherData = await res.json();
  return weatherData;
};

export default WeatherApp;
