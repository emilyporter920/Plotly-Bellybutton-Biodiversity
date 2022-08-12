// // Bar chart
// var trace= {
//     x: ["burrito", "pizza", "chicken"],
//     y: [10,18,5],
//     type: "bar"
// };

// Plotly.newPlot("plotArea", [trace]);

// var layout = {
//     title: "Luncheon Survey",
//     xaxis: {title: "Food Options"},
//     yaxis: {title: "Number of Respondents"}
// };

// Plotly.newPlot("plotArea", [trace], layout);

// // Bar chart
// var barTrace = {
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
// "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: 'bar'
// };

// var barData=[barTrace];

// var barLayout= {
//     title: "'Bar' Chart",
//     xaxis: {title: "Drinks"},
//     yaxis: {title: "% of Drinks Ordered"}
// };

// Plotly.newPlot("practiceBarchart", barData, barLayout);

// // Pie chart
// var pieTrace = {
//     labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
//     "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: 'pie'
//    };

// var pieData = [pieTrace];

// var pieLayout = {
//     title: "'Pie' Chart"
// };

// Plotly.newPlot("plotArea", pieData, pieLayout);

// // Scatterplot
// var lineTrace1 = {
//     x: [1,2,3,4,5],
//     y: [2,4,6,8,10],
//     mode: 'markers',
//     type: 'scatter'
// };

// var lineTrace2 = {
//     x: [5,10,15,20],
//     y: [10,20,30,40],
//     mode: 'markers',
//     type: 'scatter'
// };

// var lineData=[lineTrace1, lineTrace2];

// var lineLayout = {
//     title: 'Practice Scatter Plot',
//     xaxis: {title: 'x-axis'},
//     yaxis: {title: 'y-axis'}
// };

// Plotly.newPlot('practiceScatterplot', lineData, lineLayout)

// // .map()
// var numbers = [1,2,3,4,5];
// var doubled = numbers.map(number => number*2)

// console.log(doubled)

// var cities = [
//     {
//       "Rank": 1,
//       "City": "San Antonio ",
//       "State": "Texas",
//       "Increase_from_2016": "24208",
//       "population": "1511946"
//     },
//     {
//       "Rank": 2,
//       "City": "Phoenix ",
//       "State": "Arizona",
//       "Increase_from_2016": "24036",
//       "population": "1626078"
//     },
//     {
//       "Rank": 3,
//       "City": "Dallas",
//       "State": "Texas",
//       "Increase_from_2016": "18935",
//       "population": "1341075"
//     }
// ];

// var cityNames = cities.map(function(city) {
//     return city.City;
// });

// console.log(cityNames);

// // Return population of each city instead of city name
// var population = cities.map(function(city) { 
//     return city.population;
// });

// console.log(population);

// function init() {
//     data=[{
//         x: [1,2,3,4,5],
//         y: [1,2,4,8,16]
//     }];
//     Plotly.newPlot("plot", data);
// };

// init();

// d3.selectAll("#dropdownMenu").on("change", updatePlotly);

// function updatePlotly() {
//     var dropdownMenu = d3.select("#dropdownMenu");
//     var dataset = dropdownMenu.property("value");

//     var xData = [1,2,3,4,5];
//     var yData = [];

//     if (dataset === "dataset1") {
//         yData=[1,2,4,8,16];
//     };

//     if (dataset === "dataset2") {
//         yData=[1,10,100,1000,10000];
//     };

//     var trace = {
//         x: [xData],
//         y: [yData]
//     };

//     Plotly.restyle("plot", trace);
// };

function init() {
    var selector = d3.select("#selDataset");

    d3.json("samples.json").then((data) => {
        console.log(data);
        var sampleNames=data.names;
        sampleNames.forEach((sample) => {
            selector
                .append("option")
                .text(sample)
                .property("value", sample);
        });
    })};

init();

function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
};

function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      var PANEL = d3.select("#sample-metadata");
  
      PANEL.html("");
      PANEL.append("h6").text(result.location);
    });
};