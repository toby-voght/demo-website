
var margin = {top: 30, right: 30, bottom: 30, left: 30};
var width = document.getElementById("hist_eg").getBoundingClientRect().width-100;
var height = 400;

var data = $.csv.toArray("Boro.csv")

var g = d3.select("#hist_eg")
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x = d3.scaleLinear()
        .domain([d3.min(data),d3.max(data)])
        .rangeRound([0, width]);

var bins = d3.histogram()
    .domain(x.domain())
    .thresholds(x.ticks(10))(data);

var y = d3.scaleLinear()
    .domain([0, d3.max(bins, function(d) { return d.length; })])
    .range([height, 0]);

var bar = g.selectAll("bar")
          .data(bins)
          .enter().append("g")
          .attr("class", "bar")
          .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; });

bar.append("rect")
    .attr("x", 0)
    .attr("width", x(bins[0].x1) - x(bins[0].x0) - 1)
    .attr("height", function(d) { return height - y(d.length); });

bar.append("text")
    .attr("dy", ".75em")
    .attr("y", 6)
    .attr("x", (x(bins[0].x1) - x(bins[0].x0)) / 2)
    .attr("text-anchor", "middle")
    .text(function(d) { return d3.format(",.0f")(d.length); });

g.append("g")
    .attr("class", "axis axis--x")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));
    
g.append("g")
    .attr("class", "axis axis--y")
    .attr("transform", "translate(0,"+ height +")")
    .call(d3.axisLeft(y))
    .attr("transform", "rotate(-360)");
