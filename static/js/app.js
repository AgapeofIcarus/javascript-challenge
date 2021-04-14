// from data.js
var tableData = data;

// Create loop for data in reports.
var tbody = d3.select("tbody");
tableData.forEach((sightings) => {
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select the form and button
var form = d3.select(".form-control");
var button = d3.select("#click-me");

console.log(data);

data.forEach(function(sightings) {
  console.log(sightings);
  var row = tbody.append("tr");
  Object.entries(weatherReport).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
    });
});