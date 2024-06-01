import React from "react";

const Collapse = (props) => {
  console.log(props.children);
  return (
    <div>
      <a
        className="btn btn-primary"
        data-bs-toggle="collapse"
        href="#collapseExample"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Link with href
      </a>

      <div className="collapse" id="collapseExample">
        {props.children}
      </div>
    </div>
  );
};

export default Collapse;
