import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="card w-100">
        <img src={this.props.image} alt="..." className="card-img-top" />
        <div className="card-body">
          <h5 cardTitle className="card-title">
            {this.props.cardTitle}
          </h5>
          <p className="card-text">{this.props.cardText}</p>
          <p className="card-text">
            {" "}
            <small className="text-muted">Last updated 3 mins ago</small>{" "}
          </p>
        </div>
      </div>
    );
  }
}

export default Card;


