import React from "react";

const InfoCard = ({ img }) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl bg-accent">
      <figure className="pl-5">
        <img src={img} alt="Movie" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title"> {cardTitle}New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
// rafce
