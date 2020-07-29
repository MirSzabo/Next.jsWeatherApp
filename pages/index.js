import Layout from "../components/Layout";
import Forecast from "../components/Forecast";
import Link from "next/link";

const WeatherApp = ({ weatherData }) => (
  <Layout>
    <div>
      <h1>Weather Forecast</h1>
      <Forecast weatherData={weatherData} />
      <div>
        <Link href="/details">
          <a>Click for details</a>
        </Link>
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

export default WeatherApp;
