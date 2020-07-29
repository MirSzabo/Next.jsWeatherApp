import fetch from "isomorphic-unfetch";

const capital = "Copenhagen";
const api = "https://api.openweathermap.org/data/2.5/weather?q=";
const cityName = capital.toLowerCase();
const key = process.env.API_KEY;
const units = "&units=metric";
const url = api + cityName + key + units;

const MyApp = ({ Component, pageProps, weatherData }) => {
  return <Component weatherData={weatherData} {...pageProps} />;
}

MyApp.getInitialProps = async () => {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data)
  return { weatherData: data };
};

export default MyApp;
