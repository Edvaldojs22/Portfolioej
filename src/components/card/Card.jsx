/* eslint-disable react/prop-types */
import "./Card.css";

import { AiOutlineCloseCircle } from "react-icons/ai";

const Card = ({ description, visibleOn, Icon, color, handleClose, name }) => {
  if (!visibleOn) return null;
  return (
    <div className={`${visibleOn ? " cardOn" : ""}`}>
      <Icon className="iconTec" color={color} />
      <p>{name}</p>
      <h2>{description}</h2>
      <AiOutlineCloseCircle className="iconClose" onClick={handleClose} />
    </div>
  );
};

export default Card;
