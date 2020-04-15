import React from "react";
import ReactDOM from "react-dom";

import { HorizontalBarChart, VerticalBarChart, PieChart } from "../src/Charts";
import "../src/style.css";

const getRandomDatum = () => Math.floor(Math.random() * 100);

const data = {
  admin: 5,
  riaa: 2,
  Kritz: 1,
  ammu: 0,
  root: 4,
};

const App = () => (
  <>
    <nav>Charts</nav>
    <main>
      <HorizontalBarChart data={data} />
      <VerticalBarChart data={data} />
      <PieChart data={data} />
    </main>
  </>
);

ReactDOM.render(<App />, document.getElementById("main"));
