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

  componentDidMount() {
    console.log("componenet created");
  }
  componentDidUpdate() {
    console.log("component updated");
  }

  render() {
    return (
      <div className="mx-3">
        <button
          className="btn btn-primary w-100 mb-2 mt-3 "
          onClick={this.showMore}
        >
          {/* {this.props.children.props.cardTitle} */}
          {React.Children.map(
            this.props.children,
            (children) => children.props.cardTitle
          )}
        </button>

        {this.state.showContent ? (
          <div className="collapse show" id={this.props.href}>
            {React.Children.map(this.props.children, (children) => children)}
          </div>
        ) : null}
      </div>
    );
  }
}


export default Collapse;
