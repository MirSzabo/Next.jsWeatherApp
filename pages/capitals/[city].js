import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";
import Layout from "../../components/Layout";
import { useState, useEffect } from "react";

const api = "https://api.openweathermap.org/data/2.5/weather?q=";
const key = process.env.API_KEY;
const units = "&units=metric";

export default function City({ weatherData }) {
  const router = useRouter();
  const [weather, setWeather] = useState(weatherData);
  const cityName = router.query.city.toLowerCase();

  useEffect(() => {
    async function loadData() {
      const res = await fetch(api + cityName + key + units);
      const weatherData = await res.json();
      setWeather(weatherData);
    }
    if (weatherData.lenght === 0) {
      loadData();
    }
  }, {});

  if (!weather) {
    return <Layout>loading...</Layout>;
  }
  return (
    <Layout>
      <div>
        Temperature in {router.query.city} is {weather.main.temp}{" "}
        <span>&#8451;</span>
      </div>
      <h3>Details</h3>
      <span>
        <b>Temperature: </b>
        {weather.main.temp} <span>&#8451;</span>
        <div>
          <b>Feels like: </b>
          {weather.main.feels_like} <span>&#8451;</span>
        </div>
      </span>
      <div>
        <b>Wind: </b>
        {weather.wind.speed} kph
      </div>
      <div>
        <b>Humidity: </b>
        {weather.main.humidity} %
      </div>
    </Layout>
  );
}

City.getInitialProps = async (ctx) => {
  if (!ctx.req) {
    return { weatherData: {} };
  }
  const { query } = ctx;
  const cityName = query.city.toLowerCase();
  const res = await fetch(api + cityName + key + units);
  const data = await res.json();
  return { weatherData: data };
};
