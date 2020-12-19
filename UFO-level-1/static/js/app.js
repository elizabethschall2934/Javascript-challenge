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

  document.getElementById('table-content').innerHTML="";
  
  ufoInfo.forEach((ufo) => {
      var line = tbody.append("tr");

      Object.entries(ufo).forEach(([key, value]) => {
          var box = line.append("td");
          box.text(value);
      });
  });
};
tableShow(tableData);


//  // Get the value property of the input element
//  var inputValue = inputElement.property("value");
// // Create event handlers 
// function runEnter() {

// button.on("click", runEnter(){
//   // Prevent the page from refreshing
//   d3.event.preventDefault();

// // Display filtered data on console
// console.log(ufoInfo);
// }

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
