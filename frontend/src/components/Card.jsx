import React from "react";

const Card = ({ title, content }) => {
  return (
    <div className="text-light bg-primary w-[400px] h-[300px] rounded-xl">
      <div className="text-dark  text-2xl font-bold h-[35%] flex justify-center items-center border-b-2 border-dark">
        {title}
      </div>
      <div className="text-dark text-4xl bg-primaryDark  h-[65%] flex justify-center items-center rounded-b-xl ">
        {content}
      </div>
    </div>
  );
};

export default Card;
