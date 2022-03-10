// diver bar chart-1
var ctx = document.getElementById("chart-bars-one").getContext("2d");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Sales",
        tension: 0.4,
        borderWidth: 0,
        pointRadius: 0,
        backgroundColor: "#fff",
        data: [450, 200, 100, 220, 500, 100, 400, 230, 500],
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
            display: false,
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 500,
            beginAtZero: true,
            padding: 0,
            fontSize: 14,
            lineHeight: 3,
            fontColor: "#fff",
            fontStyle: "normal",
            fontFamily: "Open Sans",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            display: false,
            padding: 20,
          },
        },
      ],
    },
  },
});

// doughnut chart 1
var ctx = document.getElementById("chart-doughnut").getContext("2d");

var myDoughnutChart = new Chart(ctx, {
  type: "doughnut",
  data: (data = {
    datasets: [
      {
        data: [10, 20, 30, 15],
        backgroundColor: [
          "rgba(223, 89, 83, 1)",
          "rgba(255, 189, 7, 1)",
          "rgba(3, 151, 242, 1)",
          "rgba(118, 203, 255, 1)",
        ],
      },
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["Fashion", "Baby & Child", "Grocery", "Home Decor"],
  }),
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: "bottom",
      align: "center",
      labels: {
        padding: 20,
      },
    },
  },
});
