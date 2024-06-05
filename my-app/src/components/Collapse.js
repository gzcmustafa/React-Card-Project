import React from "react";

class Collapse extends React.Component {
  constructor() {
    super();

    this.state = {
      showContent: false,
    };
  }

  showMore = () => {
    this.setState({ showContent: !this.state.showContent });
  };

  render() {
    return (
      <div className="mx-3">
        <button
          className="btn btn-primary w-100 mb-2 mt-3 "
          onClick={this.showMore}
        >
          Click Card
        </button>

        {this.state.showContent ? (
          <div className="collapse show" id={this.props.href}>
            {this.props.children}
          </div>
        ) : null}
      </div>
    );
  }
}


export default Collapse;
