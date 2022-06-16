import React, { useState, useEffect, useRef } from "react";
import { select, scaleBand, axisBottom, axisLeft, stack } from "d3";
import * as d3 from "d3";

export const StackedBarGraph = ({ datasets, keys, colors }) => {
  const [data, setData] = useState(datasets);
  const svgRef = useRef();
  const wrapperRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);

    var margin = { top: 20, right: 20, bottom: 20, left: 30 },
      width = 660 - margin.left - margin.right,
      height = 300 - margin.top - margin.bottom;

    const stackGenerator = stack().keys(keys);
    const layers = stackGenerator(data);

    const yScale = d3
      .scaleLinear()
      .domain([0, 700])
      .range([height - margin.bottom, margin.top]);

    const x0Scale = scaleBand()
      .domain(data.map((d) => d.name))
      .range([margin.left, width - margin.right])
      .padding(0.15);
    const x1Scale = scaleBand()
      .domain(data.map((d) => d.type))
      .rangeRound([0, x0Scale.bandwidth()])
      .padding(0.2);

    const xAxis = axisBottom(x0Scale).ticks(data.length);
    const yAxis = axisLeft(yScale);

    const tooldiv = d3
      .select("#chartArea")
      .append("div")
      .style("visibility", "hidden")
      .style("position", "absolute")
      .style("background-color", "white");

    /* X축 */
    svg
      .select(".x-axis")
      .attr("transform", `translate(0, ${height - 20})`)
      .call(xAxis);
    /* Y축 */
    svg
      .select(".y-axis")
      .attr("transform", `translate(${0 + 30}, 0 )`)
      .call(yAxis);

    svg
      .selectAll(".layer")
      .data(layers)
      .join("g")
      .attr("class", "layer")
      .attr("fill", (layer) => colors[layer.key])
      .selectAll("rect")
      .data((layer) => layer)
      .join("rect")
      .attr("class", "barreact")
      .attr(
        "x",
        (sequence) => x0Scale(sequence.data.name) + x1Scale(sequence.data.type)
      )
      .attr("stroke", "white")
      .on("mouseover", (e, d) => {
        tooldiv.style("visibility", "visible").text(`${d.data.tooltip}`);
      })
      .on("mousemove", (e, d) => {
        tooldiv
          .style("top", e.pageY - 50 + "px")
          .style("left", e.pageX - 50 + "px");
      })
      .on("mouseout", () => {
        tooldiv.style("visibility", "hidden");
      })
      .attr("width", x1Scale.bandwidth())
      .attr("y", (sequence) => yScale(sequence[1]))
      .attr("height", (sequence) => yScale(sequence[0]) - yScale(sequence[1]));
  }, [data, keys, colors]);

  return (
    <>
      <div
        ref={wrapperRef}
        style={{ width: "660px", height: "300px" }}
        id="chartArea"
      >
        <svg ref={svgRef} style={{ width: "660px", height: "300px" }}>
          <g className="x-axis" />
          <g className="y-axis" />
        </svg>
      </div>
    </>
  );
};
