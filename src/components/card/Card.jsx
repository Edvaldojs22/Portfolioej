/* eslint-disable react/prop-types */
import "./Card.css";

const Card = ({ description, visibleOn, Icon, color }) => {
  return (
    <div className={`card_text ${visibleOn ? " cardOn" : ""}`}>
      <Icon className="iconTec" color={color} />
      <h2>{description}</h2>
    </div>
  );
};

export default Card;
