import React from "react";
import Banner from "./Banner";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testmonials from "./Testmonials";
import Footar from "../Shared/Footar";

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <MakeAppointment />
      <Testmonials />
      <Footar />
    </div>
  );
};
export default Home;
