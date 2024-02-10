import React from "react";

function Loading() {
  return (
    <div className="h-screen flex justify-center items-center">
      {/* <button className="btn"> */}
      <span className="loading loading-ball loading-xs"></span>
      <span className="loading loading-ball loading-sm"></span>
      <span className="loading loading-ball loading-md"></span>
      <span className="loading loading-ball loading-lg"></span>

      {/* </button> */}
    </div>
  );
}

export default Loading;
