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
            display: true,
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

// min to max line chart
var ctx = document.getElementById("engagedChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thr"],
    datasets: [
      {
        label: "Mobile apps",
        tension: 0.4,
        borderWidth: 0,
        pointRadius: 0,
        borderColor: "rgba(105, 198, 255, 1)",
        borderWidth: 3,
        backgroundColor: "transparent",
        data: [400, 250, 500, 150, 300, 200, 450],
        maxBarThickness: 6,
      },
      {
        label: "Websites",
        tension: 0.4,
        borderWidth: 0,
        pointRadius: 0,
        borderColor: "rgba(255, 157, 161, 1)",
        borderWidth: 3,
        backgroundColor: "transparent",
        data: [30, 120, 40, 200, 150, 220, 40],
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
            color: "#dee2e6ad",
            zeroLineColor: "#dee2e6ad",
            zeroLineWidth: 1,
            drawBorder: true,
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 500,
            beginAtZero: true,
            padding: 10,
            fontSize: 11,
            fontColor: "#adb5bd",
            lineHeight: 4,
            fontStyle: "normal",
            fontFamily: "Open Sans",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            color: "#dee2e6ad",
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
