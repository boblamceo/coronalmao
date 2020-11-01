import React, { Fragment } from "react";
import Countries from "../Components/TopSection/Countries.jsx";
import MidSectionContainer from "../Components/MidSection/MidSectionContainer.jsx";
import Navbar from "../Layouts/Navbar.jsx";
import Footer from "../Layouts/Footer.jsx";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Countries />
      <MidSectionContainer />
      <Footer />
    </Fragment>
  );
};

export default Home;
