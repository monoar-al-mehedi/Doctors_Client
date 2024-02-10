import React from "react";
import footer from "../../assets/images/footer.png";

const Footar = () => {
  return (
    <footer
      style={{
        background: `url(${footer})`,
        backgroundSize: "cover",
      }}
      className="footer p-10 "
    >
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Emergency Checkup</a>
        <a className="link link-hover">Monthly Checkup</a>
        <a className="link link-hover">Weekly Checkup</a>
        <a className="link link-hover">Deep Checkup</a>
      </nav>
      <nav>
        <h6 className="footer-title">Oral Health</h6>
        <a className="link link-hover">Fluoride Treatment</a>
        <a className="link link-hover">Cavity Filling</a>
        <a className="link link-hover">Teath Whitening</a>
      </nav>
      <nav>
        <h6 className="footer-title">Our Address</h6>
        <a className="link link-hover">Uttora, Dhaka, Bangladesh</a>
      </nav>
    </footer>
  );
};

export default Footar;
