import React from "react";
// Icons
import { BiCheck } from "react-icons/bi";

const ListItem = ({ text }) => {
  return (
    <li>
      <BiCheck className="service__list-icon" />
      <p>{text}</p>
    </li>
  );
};

export default ListItem;
