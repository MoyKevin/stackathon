import { select } from "d3";
import React from "react";

export default class Example2 extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.drawTable = this.drawTable.bind(this);
  }
  componentDidMount() {
    this.drawTable();
  }
  drawTable() {
    const { data, width, height } = this.props;
    console.log("props here", this.props);
    let accessToRef = select(this.myRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("background-color", "#cccccc")
      .style("padding", 10)
      .style("margin-left", 50);

    accessToRef
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => height - 10 * d)
      .attr("width", 40)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "royalblue");
  }
  render() {
    return (
      <>
        <div ref={this.myRef}>Example 2</div>
      </>
    );
  }
}
