import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { Example1 } from "./components";
import Example2 from "./components/example2";
import { select, csv } from "d3";

/**
 * COMPONENT
 */
export default class Routes extends Component {
  componentDidMount() {
    csv("temperature.csv").then(data => {
      console.log(data);
    });
  }

  render() {
    const dataTest = [12, 36, 15, 25, 35, 10, 40];
    const w = 500;
    const h = 400;
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/example1" component={Example1} />
        <Route
          path="/example2"
          render={() => <Example2 data={dataTest} width={w} height={h} />}
        />
      </Switch>
    );
  }
}
