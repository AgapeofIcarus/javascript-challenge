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
d3.selectAll(".filter").on("change", updateFilters)

//Create a container to simplify the next steps.
var filters = {}

// Lets loop through the data.

unction updateFilters() {
    var input = d3.select(this).select("input");
    var inputValue = input.property("value");
    var inputID = inputValue.attr("id");

    var inputDate = d3.select("#datetime").property("value");
    var inputCity = d3.select("#city").property("value");

    // Arrange an if else statement for input options.
    
    if (inputValue) {
        filters[inputID] = inputValue
    }
    else {
        delete filters[inputID]
    }

    if (inputDate) {
        filters['datetime'] = inputDate;
    }
    else if (inputCity) {
        filters['city'] = inputCity;
    }
    else {
        
    };
    var filters = {"date": inputDate, "city":inputCity};

    Object.values(filters).forEach((value) => {
        var filteredData = tableData.filter(row[key] === value)
    });
};

// Make the form event do its thing.

function runEnter() {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    tbody.html("");
    var filteredData = tableData.filter(ufos => ufos.datetime === inputValue);
    
    filteredData.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
    
    console.log(filteredData);
};