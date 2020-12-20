// from data.js
var tableData = data;

// Select the filter
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#datetime");

 // Select the input element and get the raw HTML node
 var inputElement = d3.select("#datetime");

 var tbody = d3.select("tbody");

 // Funtion to show table info
function tableShow(ufoInfo) {

  document.getElementById("table-content").innerHTML="";
  
  ufoInfo.forEach((ufo) => {
      var line = tbody.append("tr");

      Object.entries(ufo).forEach(([key, value]) => {
          var box = line.append("td");
          box.text(value);
      });
  });
};
tableShow(tableData);

// Create event handlers 
button.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

// Get the value property of the input element
var inputDate = inputElement.property("value");

// filter the table with input valie
var filteredData = tableData.filter(ufoInfo => ufoInfo.datetime === inputDate);

// Display filtered data on console
console.log(filteredData);
});

// // Loop through filered data and append to table
// filteredData.forEach(ufo => {
//     var line = tbody.append("tr");
//     Object.entries(ufo).forEach(([key, value]) => {
//         var box = line.append("td");
//         box.text(value);
//     })
//     // Displays table 
// data.forEach(ufo => {
//     var line = tbody.append("tr");
//     Object.entries(ufo).forEach(([key, value]) => {
//         var box = row.append("td");
//         box.text(value);
//     })
// });
