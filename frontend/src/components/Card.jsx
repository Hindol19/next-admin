import React from "react";

const Card = ({ title, content }) => {
  return (
    <div className="text-light bg-primary w-[300px] h-[220px] rounded-md">
      <div className="text-light  text-xl font-bold h-[35%] flex ml-5 items-center ">
        {title}
      </div>
      <div className="text-light text-4xl bg-primaryDark  h-[65%] flex justify-center items-center rounded-b-md ">
        {content}
      </div>
    </div>
  );
};

export default Card;
