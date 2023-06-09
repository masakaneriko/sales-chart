const colorBlue = '#36a2eb';
const colorPink = '#ff6384';
const colorGreen = '#36eb85';


const ctx = document.getElementById('myChart');
const data = {
  labels: ['4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月'],
  datasets: [
    {
      label: '目標',
      data: [1000000, 1000000, 900000, 1700000, 700000, 700000, 700000, 700000, 700000, 4200000, 1200000, 1200000],
      borderColor: colorBlue,
      backgroundColor: colorBlue,
    },
    {
      label: '実績',
      data: [1639000],
      borderColor: colorPink,
      backgroundColor: colorPink,
    },
    {
      label: '前年同月',
      data: [390000, 1071000, 800100, 1417500, 588252, 488503, 903000, 1019500, 2779100, 4900100, 2502200, 1443300],
      borderColor: colorGreen,
      backgroundColor: colorGreen,
    }
  ]
};

new Chart(ctx, {
  type: 'bar',
  data: data,
  options: {
    responsive: true,
    animation: {
      duration: 3300,
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '1. グループ内売上目標'
      }
    }
  },
});

// Second Chart
const ctx2 = document.getElementById('myChartTwo');
const data2 = {
  labels: ['4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月'],
  datasets: [
    {
      label: '目標',
      data: [100000, 100000, 200000, 200000, 250000, 300000, 300000, 300000, 300000, 300000, 300000, 500000],
      borderColor: colorBlue,
      backgroundColor: colorBlue,
    },
    {
      label: '実績',
      data: [107000],
      borderColor: colorPink,
      backgroundColor: colorPink,
    },
    {
      label: '前年同月',
      data: [149537, 140000, 152000, 704700, 30000, 81500, 292000, 165700, 30000, 98000, 65500, 713500],
      borderColor: colorGreen,
      backgroundColor: colorGreen,
    }
  ]
};

new Chart(ctx2, {
  type: 'bar',
  data: data2,
  options: {
    responsive: true,
    animation: {
      duration: 3300,
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '2. 社外売上目標'
      }
    }
  },
});