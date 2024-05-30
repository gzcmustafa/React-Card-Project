import React from "react";
import ReactDOM from "react-dom";

import Card from "./components/Card.js";

const App = () => {
  return (
    <div>
      <div className="card-group">
        <Card
          cardTitle="Card Title-1"
          cardText="Lorem Ipsum Text 1"
          updatedTime="Last Updated 1 min ago"
          image="https://picsum.photos/id/1/200/300"
        />

        <Card
          cardTitle="Card Title-2"
          cardText="Lorem Ipsum Text 2"
          updatedTime="Last Updated 2 min ago"
          image="https://picsum.photos/id/10/200/300"
        />

        <Card
          cardTitle="Card Title-3"
          cardText="Lorem Ipsum Text 3"
          updatedTime="Last Updated 3 min ago"
          image="https://picsum.photos/id/100/200/300"
        />
      </div>
      ,,
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
