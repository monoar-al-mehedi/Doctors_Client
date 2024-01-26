import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

function info() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <InfoCard cardTitle="Openig Hours" img={clock} />
      <InfoCard cardTitle="Our Location" img={marker} />
      <InfoCard cardTitle="Contact Us" img={phone} />
    </div>
  );
}

export default info;
