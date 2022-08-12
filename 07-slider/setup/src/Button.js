import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Button = ({ index, setIndex, direction }) => {
  return (
    <button
      className={direction}
      onClick={() => setIndex(direction === "prev" ? index - 1 : index + 1)}
    >
      {direction === "prev" ? <FiChevronLeft /> : <FiChevronRight />}
    </button>
  );
};

export default Button;
