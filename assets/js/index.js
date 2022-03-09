// line chart
var ctx2 = document.getElementById("chart-line").getContext("2d");

var gradientStroke1 = ctx2.createLinearGradient(0, 230, 0, 50);

gradientStroke1.addColorStop(1, "#253477");
gradientStroke1.addColorStop(0.5, "#076FAF");
gradientStroke1.addColorStop(0, "#076FAF00"); //purple colors

var gradientStroke2 = ctx2.createLinearGradient(0, 230, 0, 50);

gradientStroke2.addColorStop(1, "rgba(20,23,39,0.2)");
gradientStroke2.addColorStop(0.2, "rgba(72,72,176,0.0)");
gradientStroke2.addColorStop(0, "rgba(20,23,39,0)"); //purple colors

new Chart(ctx2, {
  type: "line",
  data: {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Mobile apps",
        tension: 0.4,
        borderWidth: 0,
        pointRadius: 0,
        borderColor: "#cb0c9f",
        borderWidth: 3,
        backgroundColor: gradientStroke1,
        data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
        maxBarThickness: 6,
      },
      {
        label: "Websites",
        tension: 0.4,
        borderWidth: 0,
        pointRadius: 0,
        borderColor: "#3A416F",
        borderWidth: 3,
        backgroundColor: gradientStroke2,
        data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
        maxBarThickness: 6,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      enabled: true,
      mode: "index",
      intersect: false,
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: "#dee2e6",
            zeroLineColor: "#dee2e6",
            zeroLineWidth: 1,
            zeroLineBorderDash: [2],
            drawBorder: true,
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 500,
            beginAtZero: true,
            padding: 10,
            fontSize: 11,
            fontColor: "#adb5bd",
            lineHeight: 3,
            fontStyle: "normal",
            fontFamily: "Open Sans",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            zeroLineColor: "rgba(0,0,0,0)",
            display: true,
          },
          ticks: {
            padding: 10,
            fontSize: 11,
            fontColor: "#adb5bd",
            lineHeight: 3,
            fontStyle: "normal",
            fontFamily: "Open Sans",
          },
        },
      ],
    },
  },
});

// bar chart
var ctx = document.getElementById("chart-bars").getContext("2d");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Deactive",
        tension: 0.4,
        borderWidth: 0,
        pointRadius: 0,
        backgroundColor: "#DF5953",
        data: [450, 200, 100, 220, 500, 100, 400, 230, 500],
        maxBarThickness: 6,
      },
      {
        label: "Active",
        tension: 0.4,
        borderWidth: 0,
        pointRadius: 0,
        backgroundColor: "#00FF6A",
        data: [300, 150, 80, 200, 450, 70, 350, 180, 440],
        maxBarThickness: 6,
      },
      {
        label: "Processing",
        tension: 0.4,
        borderWidth: 0,
        pointRadius: 0,
        backgroundColor: "#FFBD07",
        data: [140, 170, 60, 145, 470, 65, 370, 165, 420],
        maxBarThickness: 6,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: "right",
    },
    tooltips: {
      enabled: true,
      mode: "index",
      intersect: false,
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: true,
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 500,
            beginAtZero: true,
            padding: 0,
            fontSize: 14,
            lineHeight: 3,
            fontColor: "#000",
            fontStyle: "normal",
            fontFamily: "Open Sans",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: true,
          },
          ticks: {
            display: true,
            padding: 20,
          },
        },
      ],
    },
  },
});

// pie chart
// For a pie chart
var ctx = document.getElementById("chart-doughnut").getContext("2d");

var myDoughnutChart = new Chart(ctx, {
  type: "doughnut",
  data: (data = {
    datasets: [
      {
        data: [10, 20, 30],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
      },
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["Red", "Yellow", "Blue"],
  }),
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: "bottom",
    },
  },
});
