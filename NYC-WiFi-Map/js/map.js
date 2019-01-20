/**
 * Visualize NYC schools D3 map.
 * Authors: Hannah Keiler, Jeremy Myers, George Tsai, Stephen Zhou
 */

/**
 * Basic map properties
 */
var width = 960,
    height = 900,
    centered;

/**
 * District and school legend color mappings
 */
var envLow = "#B0E2FF",
    envMed = "#5CACEE",
    envHigh = "#4A708B",
    envNa = "#c0c0c0";

var envLegendData = [
                     { "label": "High", "color": envHigh },
                     { "label": "Medium", "color": envMed },
                     { "label": "Low", "color": envLow },
                     { "label": "N/A", "color": envNa }
                    ];

var schLow = "#FF2C00",
    schMed = "#FFDE00",
    schHigh = "green",
    schNa = "gray";

var schLegendData1 = [
                     { "label": "2018", "color": schHigh },
                     { "label": "2017", "color": schMed },
                     { "label": "2016", "color": schLow },
                     { "label": "N/A", "color": schNa }
                    ];

var schLegendData2 = [
                     { "label": "LinkNYC - Citybridge", "color": schHigh },
                     { "label": "SPECTRUM", "color": schMed },
                     { "label": "Transit Wireless", "color": schLow },
                     { "label": "N/A", "color": schNa }
                    ];

var schLegendData3 = [
                     { "label": "Free", "color": schHigh },
                     { "label": "Limited Free", "color": schLow },
                     { "label": "N/A", "color": schNa }
                    ];


/**
 * Make map SVGs
 */
var projection = d3.geo.mercator()
    .center([-73.94, 40.73])
    .scale(140000)
    .translate([(width) / 2, (height)/2]);

var path = d3.geo.path()
    .projection(projection);

var div = d3.select("body").append("div")   
    .attr("class", "tooltip")               
    .style("opacity", 0);

var svg = d3.select("#map")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

var smap = svg.append("g");

plotSchoolDistricts();

/**
 * School information text field functions
 */

var messageMap = {};
d3.csv('resource/messages.csv', function(rows) {
    rows.forEach(function(value, index) {
        var environment = value.Environment;
        if (!messageMap[value.School]) {
            messageMap[value.School] = {};
        }
        messageMap[value.School][environment] = value.Message;
    });
    displayInfo();
});

function displayInfo() {
    var school = schoolToKey().trim();
    var environment = envToKey().trim();

    if (messageMap[school] && messageMap[school][environment])
        $("#overlay").html(messageMap[school][environment]);
    else
        $("#overlay").html('Try some combinations!');
}

// Converting category names to csv key name
function schoolToKey() {
    var schoolName = $("#groupby").text().trim();
    if (schoolName == "Graduation Rate")
        return "gradrate";
    if (schoolName == "Grade")
        return "grade";
    if (schoolName == "Free or Limited Free")
        return "free";
    return "";
}

// Converting category names to csv key name
function envToKey() {
    var environmentName = $("#environment").text().trim();
    if (environmentName == "Graffiti")
        return "graffiti";
    if (environmentName == "Noise Complaints")
        return "noise";
    if (environmentName == "Public Assistance")
        return "assistance";
    if (environmentName == "School Attendance")
        return "attendence";
    if (environmentName == "School Enrollment")
        return "enrollment";
    return "";
}

/**
 * School and district dropdown coloring functions
 */

function color(property) {
  if (property == "LOW" || property == "Transit Wireless")
    { return schLow; }
  else if (property == "MED" || property == "SPECTRUM")
    { return schMed; }
  else if (property == "HIGH" || property == "LinkNYC - Citybridge")
    { return schHigh; }
  else
    return schNa;
}

function colorDistrict(property) {
  if (property == "LOW") 
    { return envLow; }
  else if (property == "MEDIUM" || property == "MED") 
    { return envMed; }
  else if (property == "HIGH")
    { return envHigh; }
  else 
    return envNa;
}

// School factors
d3.select("#none").on("click", function() {
    d3.selectAll("circle")
        .style("fill", "blue");

    removeLegend("schLegend");
    $('#groupby').text('School');
    displayInfo();
});

d3.select("#gradrate").on("click", function() {
    removeLegend("schLegend");
    colorSchools('Graduation Rate', 'GRADRATE');
});

d3.select("#grade").on("click", function() {
    removeLegend("schLegend");
    colorSchools('Grade', 'GRADE');
});

d3.select("#sat").on("click", function() {
    removeLegend("schLegend");
    colorSchools('Free or Limited Free', 'Free');
});

function colorSchools(name, key) {
    removeLegend('schLegend');

    d3.selectAll("#school")
        .style("fill", function(d) {
        return color(d.properties[key]);
    });

    showLegend("schLegend", 20, name);
    $('#groupby').text(name);
    displayInfo();
}

// Environment factors
d3.select("#mapnone").on("click", function() {
    removeLegend("envLegend");

    d3.selectAll("path")
        .attr("fill", "#c0c0c0");

    $('#environment').text('Environment');
    displayInfo();
});

d3.select("#mapgraffiti").on("click", function() {
    colorEnvironment('Graffiti', 'graffiti');
});

d3.select("#mapnoise").on("click", function() {
    colorEnvironment('Noise Complaints', 'noise');
});

d3.select("#mapassistance").on("click", function() {
    colorEnvironment('Public Assistance', 'assistance');
});

d3.select("#mapattendance").on("click", function() {
    colorEnvironment('School Attendance', 'attendance');
});

d3.select("#mapenrollment").on("click", function() {
    colorEnvironment('School Enrollment', 'enrollment');
});

function colorEnvironment(name, key) {
    d3.selectAll("path")
        .attr("fill", function(d) {
            return colorDistrict(d.properties[key]);
        });

    showLegend("envLegend", 130, name);
    $('#environment').text(name);
    displayInfo();
}

/**
 * Actually plotting school districts and schools
 */

function plotSchoolDistricts() {
    d3.json("json/districts_merged.json", function(error, nyb) {
        smap.attr("id", "schooldistrict")
            .selectAll(".state")
            .data(nyb.features)
            .enter().append("path")
            .attr("class", function(d){ return d.properties.SchoolDist; })
            .attr("d", path);

        plotSchools();
    });
}

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

var circle_r = 5;
function plotSchools() {
    d3.json("json/Clean_NYC_WiFi.json", function(error, school) {
        var mouseDuration = 150;
        smap.selectAll(".school")
            .data(school.features)
            .enter().append("circle")
            .attr("id", "school")
            .attr("class", function(d) { return d.properties.SCHOOLNAME; })
            .attr("transform", function(d) { return "translate(" + projection(d.geometry.coordinates) + ")"; })
            .attr("r", circle_r)
            .attr("stroke-width", 0)
            .style("fill", "blue")
            .style("opacity", 0.60)
            .on("mouseover", function(d) {     
                d3.select(this).transition().duration(mouseDuration).style("opacity", 1);
                div.transition().duration(mouseDuration)
                .style("opacity", 1)
                .style("left", (d3.event.pageX + 10) + "px")
                .style("top", (d3.event.pageY -30) + "px")
                .style("fill", "#8DB6CD")
                .style("height", "90px");

                var toolText = toTitleCase(d.properties.SCHOOLNAME)
                if (d.properties.TYPE_WiFi != "<NA>" && d.properties.TYPE_WiFi != "null" && d.properties.TYPE_WiFi != "NaN") {
                    toolText += "<br /> This WiFi hotspot is " + d.properties.TYPE_WiFi; 
                }
                if (d.properties.GRADE != "<NA>" && d.properties.GRADE != "null" && d.properties.GRADE != "NaN") {
                    toolText += "<br /> Provider is " + d.properties.GRADE;
                }
                if (d.properties.GRAD_RAW == "Indoor" || d.properties.GRAD_RAW == "Library") {
                    toolText += "<br /> The hotspot is indoors";
                }
                if (d.properties.GRAD_RAW == "Outdoor" || d.properties.GRAD_RAW == "Outdoor Kiosk") {
                    toolText += "<br /> The hotspot is outdoors"
                }

                div.html(toolText);
            })
            .on("mouseout", function() {
                d3.select(this)
                .transition().duration(mouseDuration)
                .style("opacity", 0.8);
                div.transition().duration(mouseDuration)
                .style("opacity", 0);
            });
    });
}

// Zoom
var zoom = d3.behavior.zoom()
    .on("zoom",function() {
        smap.attr("transform","translate("+ 
            d3.event.translate.join(",")+")scale("+d3.event.scale+")");
        smap.selectAll("circle")
            .attr("d", path.projection(projection))
            .attr("r", circle_r / d3.event.scale)
        smap.selectAll("path")  
            .attr("d", path.projection(projection)); 

  });

svg.call(zoom)

/**
 * District and school legend functions
 */

function changeLegend(variable) {
    if (variable == 'Year') {
        var schLegendData = [
                     { "label": "2018", "color": schHigh },
                     { "label": "2017", "color": schMed },
                     { "label": "2016", "color": schLow },
                     { "label": "N/A", "color": schNa }
                    ];
    }
    else if (variable == 'Provider') {
        var schLegendData = [
                     { "label": "LinkNYC - Citybridge", "color": schHigh },
                     { "label": "SPECTRUM", "color": schMed },
                     { "label": "Transit Wireless", "color": schLow },
                     { "label": "Other", "color": schNa }
                    ];
    }
    else if(variable == 'Free') {
        var schLegendData = [
                     { "label": "Free", "color": schHigh },
                     { "label": "SPECTRUM", "color": schMed },
                     { "label": "Limited Free", "color": schLow },
                     { "label": "N/A", "color": schNa }
                    ];
    }
}

function showLegend(className, xOffset, name) {
    var yOffset = 175;
    // TODO: if-else's in here a little messy
    if (className == "envLegend") {
        var data = envLegendData;
        var title = "Environment";
        var textOffset = 66;
    }
    else if (name =='Graduation Rate'){
        var data = schLegendData1;
        var title = "School";
        var textOffset = 30;
    }
    else if (name =='Grade'){
        var data = schLegendData2;
        var title = "School";
        var textOffset = 30;
    }
    else if (name =='Free or Limited Free'){
        var data = schLegendData3;
        var title = "School";
        var textOffset = 30;
    }

    d3.selectAll("g." + className).remove();

    var legend = svg.selectAll("g." + className)
        .data(data)
        .enter().append("g")
        .attr("class", className);

    legend.append("text")
        .attr("x", xOffset)
        .attr("y", yOffset)
        .attr("font-size", "16pt")
        .text(title);

    if (className == "envLegend") {
        legend.append("rect")
            .attr("x", xOffset)
            .attr("y", function(d, i) { return i * 18 + yOffset + 10; })
            .attr("width", 60)
            .attr("height", 18)
            .style("fill", function(d) { return d.color; });
    }
    else {
        legend.append("circle")
            .attr("cx", xOffset + 10)
            .attr("cy", function(d, i) { return i * 18 + yOffset + 18; })
            .attr("r", 5)
            .style("fill", function(d) { return d.color; });
    }

    legend.append("text")
        .attr("x", xOffset + textOffset)
        .attr("y", function(d, i) { return i * 18 + yOffset + 10; })
        .attr("dy", "14px")
        .text(function(d) { return d.label; });
}

function removeLegend(className) {
    d3.selectAll("g." + className).remove();
}
