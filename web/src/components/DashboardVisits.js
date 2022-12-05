import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
import { Line } from 'react-chartjs-2';

import ChartLegendItem from './ChartLegendItem';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);


const DashboardVisits = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Marketing Score',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: .3
      },
      {
        label: 'Online Score',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: .3
      }
    ]
  };

  const options = {
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        grid: {
          display: false
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };

  return (
    <div className="h-100">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="mb-3">Visits</h2>
        <div className="d-flex gap-2">
          <ChartLegendItem name="Morocco" novalue color="rgb(75, 192, 192)" />
          <ChartLegendItem name="Abroad" novalue color="rgb(255, 99, 132)" />
        </div>
      </div>
      <Line data={data} options={options} />
    </div>
  )
}

export default DashboardVisits;
