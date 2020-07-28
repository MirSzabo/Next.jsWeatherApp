import Navbar from "../components/Navbar";
import Head from "next/head";
const Layout = (props) => (
  <div>
    <Head>
      <title>Weather</title>
    </Head>
    <Navbar />
    {props.children}
  </div>
);
export default Layout;
