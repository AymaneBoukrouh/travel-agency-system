import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import ChartLegendItem from '@/components/ChartLegendItem';

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpensesChart = () => {
  const CHART_COLORS = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
  };

  const data = {
    datasets: [
      {
        data: [194, 123, 93, 50],
        backgroundColor: Object.values(CHART_COLORS),
      }
    ]
  };

  const options = {
    responsive: true,
    cutout: '70%',
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false
      },
      datalabels: {
        formatter: (value, ctx) => {
            let sum = 0;
            let dataArr = ctx.chart.data.datasets[0].data;
            dataArr.map(data => {
                return sum += data;
            });
            let percentage = (value*100 / sum).toFixed(2)+"%";
            return percentage;
        },
        color: '#fff',
      }
    }
  }

  return (
    <div>
      <div className="position-relative mb-3">
        <div className="position-absolute top-50 start-50 translate-middle">
          <div className="display-6 text-center">Revenues</div>
          <h2 className="display-6 fw-bold text-center text-success">$33,194</h2>
          <div className="display-6 text-center">Expenses</div>
          <h2 className="display-6 fw-bold text-center text-danger">-$572</h2>
        </div>
        <Doughnut 
          data = {data}
          options = {options}
        />
      </div>
      <div>
        <div className="d-flex gap-2 mb-2">
          <ChartLegendItem name="AWS" value="194" color="rgb(255, 99, 132)" />
          <ChartLegendItem name="Google Maps" value="233" color="rgb(255, 159, 64)" />
        </div>
        <div className="d-flex gap-2 mb-2">
          <ChartLegendItem name="Hotel API" value="93" color="rgb(255, 205, 86)" />
          <ChartLegendItem name="Car Rental API" value="52" color="rgb(75, 192, 192)" />
        </div>
      </div>
    </div>
  )
}

export default ExpensesChart;
