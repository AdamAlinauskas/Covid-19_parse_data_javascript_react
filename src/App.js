import React, { Component } from "react";
import axios from "axios";
import "./styles.css";

export default class App extends Component {
  async componentDidMount() {
    const result = await axios.get(
      "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv"
    );

    const data = result.data.split("\n");
    const header = data[0].split(",");
    const row = data[1].split(",");
    console.log(header[0]);
    console.log(row[1]);
    console.log(row[row.length - 1]);
  }

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}
