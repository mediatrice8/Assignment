var options = {
    series: [{
      name:'Male',
    data: [70, 45, 65, 40, 75, 30, 62]
  }, {
    name:'Female',
    data: [30, 55, 35, 60, 25, 44, 32]
  }],
    chart: {
    type: 'bar',
    height: 430
  },
  plotOptions: {
    bar: {
      horizontal: true,
      dataLabels: {
        position: 'top',
      },
    }
  },
  dataLabels: {
    enabled: true,
    offsetX: -6,
    style: {
      fontSize: '12px',
      colors: ['#fff']
    }
  },
  stroke: {
    show: true,
    width: 1,
    colors: ['#fff']
  },
  xaxis: {
    categories: [2014,2015, 2016, 2017, 2018, 2019, 2020],
  },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();