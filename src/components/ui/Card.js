import React from "react";
import './Card.css'
function Card(props) {
    return <div className="expenses">{props.children}</div>;
}

export default Card;
