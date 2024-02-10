import React from "react";

const InfoCard = ({ img, cardTitle, bgClass }) => {
  return (
    <div className={`card card-side bg-base-100 shadow-xl ${bgClass}`}>
      <figure className="pl-5 pt-5">
        <img src={img} alt="Album" />
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
