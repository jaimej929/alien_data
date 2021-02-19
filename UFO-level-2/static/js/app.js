// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get referrance to the table body.
let tbody = d3.select("tbody");

// Build table fuction
function tableFunc(data) {
    tbody.html("");
    // Add data
    data.forEach(UFOSightings => {
        let row = tbody.append("tr");
        Object.values(UFOSightings).forEach((value) => {
            let cell = row.append("td");
            cell.text(value);
        });
    });
};

function handleClick() {

    // Prevent from refreshing
    d3.event.preventDefault()


    let dInput = d3.select("#datetime").property("value");

    let cityInput = d3.select("#city").property("value");

    let sInput = d3.select("#state").property("value");

    let countryInput = d3.select("#country").property("value");

    let shapeInput = d3.select("#shape").property("value");

    var filterData = tableData;


    if (dInput) {
        filterData = filterData.filter((row) => row.datetime === dInput)
    }
    // console.log(dInput);
    
    if (cityInput) {
        filterData = filterData.filter((row) => row.city == cityInput)
    }

    if (sInput) {
        filterData = filterData.filter((row) => row.state === sInput)
    }

    if (countryInput) {
        filterData = filterData.filter((row) => row.country === countryInput)
    }

    if (shapeInput) {
        filterData = filterData.filter((row) => row.shape === shapeInput)
    }

    tableFunc(filterData);
    console.log(filterData);

};

d3.selectAll("#filter-btn").on("click", handleClick);


tableFunc(tableData);

