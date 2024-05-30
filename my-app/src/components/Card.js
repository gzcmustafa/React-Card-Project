import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt="..." className="card-img-top" />
      <div className="card-body">
        <h5 cardTitle className="card-title">
          {props.cardTitle}
        </h5>
        <p className="card-text">{props.cardText}</p>
        <p className="card-text">
          {" "}
          <small className="text-muted">Last updated 3 mins ago</small>{" "}
        </p>
      </div>
    </div>
  );
};

export default Card;
