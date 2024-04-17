import React from "react";
import Flex from "./Flex";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

const Slide = ({ item }) => {
  let rating = Array.from({ length: 5 }, (elm, index) => {
    let number = index + 0.5;
    return (
      <span>
        {item.rating >= index + 1 ? (
          <FaStar />
        ) : item.rating == number ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
    );
  });
  console.log(rating);
  return (
    <section>
      <Flex>
        <img src={item.image} alt="slideImage" />
        <div>
          <h3>{item.symbol}</h3>
          <h3>{item.heading}</h3>
          <h3>{item.paragraph}</h3>
          <h3>{item.rating}</h3>
          <h3 className="flex">{rating}</h3>
          <h3>{item.name}</h3>
          <h3>{item.designation}</h3>
        </div>
      </Flex>
    </section>
  );
};

export default Slide;
