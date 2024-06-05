import React from "react";
import ReactDOM from "react-dom/client";

import Card from "./components/Card.js";
import Collapse from "./components/Collapse.js";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="card-group">
          <div className="col">
            <Collapse href="collapseExample1">
              <Card
                cardTitle="Card Title-1"
                cardText="Lorem Ipsum Text 1"
                updatedTime="Last Updated 21 min ago"
                image="https://picsum.photos/id/29/200/300"
              />
            </Collapse>
          </div>
          <div className="col">
            <Collapse href="collapseExample2">
              <Card
                cardTitle="Card Title-2"
                cardText="Lorem Ipsum Text 2"
                updatedTime="Last Updated 2 min ago"
                image="https://picsum.photos/id/25/200/300"
              />
            </Collapse>
          </div>
          <div className="col">
            <Collapse href="collapseExample3">
              <Card
                cardTitle="Card Title-3"
                cardText="Lorem Ipsum Text 3"
                updatedTime="Last Updated 3 min ago"
                image="https://picsum.photos/id/17/200/300"
              />
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
