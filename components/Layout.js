import Navbar from "../components/Navbar";
import Head from "next/head";

const Layout = (props) => (
  <div>
    <Head>
      <title>Forecast</title>
    </Head>
    <Navbar />
    {props.children}
  </div>
);

export default Layout;
