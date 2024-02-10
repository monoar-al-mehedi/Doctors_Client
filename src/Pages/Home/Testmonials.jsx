import React from "react";
import quote from "../../assets/icons/quote.svg";
import people0 from "../../assets/images/people0.png";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import Review from "./Review";

const Testmonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Monoar Al Mehedi",
      review: "",
      location: "California",
      img: people0,
    },
    {
      _id: 2,
      name: "Winson Herry",
      review: "",
      location: "California",
      img: people1,
    },
    {
      _id: 3,
      name: "Maria Gomes",
      review: "",
      location: "California",
      img: people2,
    },
  ];
  return (
    <section>
      <div className="flex justify-between pt-5">
        <div className="pt-10">
          <h4 className="text-xl text-primary font-bold">Testimonials</h4>
          <h2 className="text-3xl">What our Patients say</h2>
        </div>
        <div>
          <img src={quote} className="w-28 lg:w-48" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testmonials;
