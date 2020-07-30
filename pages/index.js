import Layout from "../components/Layout";
import Forecast from "../components/Forecast";
import Details from "../components/Details";
import Link from "next/link";

const cities = ["Amsterdam", "Brusel", "London"];

const WeatherApp = ({ weatherData }) => (
  <Layout>
    <div>
      <h1>Weather Forecast</h1>
      <Forecast weatherData={weatherData} />
      <div>
        <Details weatherData={weatherData} />
      </div>
      <br />
      <div>
        {cities.map((city) => (
          <div>
            <Link as={`/capitals/${city}`} href="/capitals/[city]">
              <a>Check weather in {city}</a>
            </Link>
          </div>
        ))}
      </div>
      <style jsx>{`
        a {
          color: #333;
          font-weight: bold;
          text-decoration: none;
        }
      `}</style>
    </div>
  </Layout>
);

WeatherApp.getInitialProps = async () => {
  const api = "https://api.openweathermap.org/data/2.5/weather?q=";
  const cityName = "copenhagen";
  const key = process.env.API_KEY;
  const units = "&units=metric";
  const res = await fetch(api + cityName + key + units);
  const data = await res.json();
  return { weatherData: data };
};

export default WeatherApp;
