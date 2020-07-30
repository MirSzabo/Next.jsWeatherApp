import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";
import Layout from "../../components/Layout";

export default function City({ weatherData }) {
  const router = useRouter();
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
    <Layout>
      <div>
        Temperature in {router.query.city} is {temp} <span>&#8451;</span>
      </div>
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
    </Layout>
  );
}

City.getInitialProps = async (ctx) => {
  const { query } = ctx;
  const api = "https://api.openweathermap.org/data/2.5/weather?q=";
  const cityName = query.city.toLowerCase();
  const key = process.env.API_KEY;
  const units = "&units=metric";
  const res = await fetch(api + cityName + key + units);
  const data = await res.json();
  return { weatherData: data };
};
