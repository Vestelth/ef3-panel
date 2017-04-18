const chart = document.getElementById('lineChart');


let lineChart = new Chart(chart, {
  type: 'line',
  data: {
    labels: [8.06, 11.06, 14.06, 16.06, 17.06, 19.06, 28.06, 29.06],
    datasets: [
        {
            label: "",
            fill: true,
            lineTension: 0.2,
            backgroundColor: ['rgba(19, 189, 210, 1)','rgba(252, 139, 0, 1)','rgba(254, 197, 0, 1)','rgba(232, 28, 123, 1)'],
            borderColor: "rgba(0,0,0,0)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'round',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [4000,3900,3850,9400,9381,9340.3,-359.7,-445.7],
            spanGaps: false,
        },
    ]
  }
});
