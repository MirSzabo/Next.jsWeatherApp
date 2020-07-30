//I decided not to use the file to be able to do dymanic routing

/* import fetch from "isomorphic-unfetch";

const MyApp = ({ Component, pageProps, weatherData }) => {
  return <Component weatherData={weatherData} {...pageProps} />;
}

MyApp.getInitialProps = async () => {
  const api = "https://api.openweathermap.org/data/2.5/weather?q=";
  const cityName = "copenhagen";
  const key = process.env.API_KEY;
  const units = "&units=metric";
  const res = await fetch(api + cityName + key + units);
  const data = await res.json();
  return { weatherData: data };
};

export default MyApp; */
