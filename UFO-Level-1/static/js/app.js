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
var button = d3.select("#filter-btn");

// Allow for events
button.on("click", runEnter);
form.on("submit", runEnter);

// Lets make this form work with the event

function runEnter() {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    tbody.html("");
    var filters = tableData.filter(ufos => ufos.datetime === inputValue);

// Okay, time to restructure the table.

filteredData.forEach((sightings) => {
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

console.log(filteredData);
};