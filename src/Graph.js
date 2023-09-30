import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    PointElement
} from 'chart.js';

import { Line } from 'react-chartjs-2';

import './pages/Everything.css';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    PointElement
)

export default function Graph() {
    //load consts
    const data = {
        labels: ['Mon', 'Tues', 'Wed'],
        datasets: [
            {
                label: 'Number of Events',
                data: [3, 6, 9],
                borderColor: 'black',
                pointBackgroundColor: '#000000',
                borderWidth: 3,
                
            }
        ]
    }

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        tension: 0.3,
        backgroundColor:'#bdeac2',
        scales:{
            y:{
                beginAtZero: true,
                grid:{
                    display: false
                }
            },
            x:{
                grid:{
                    display: false
                }
            }
        }
    }

    return (
        <div>
            <Line
                data={data}
                options={options}
                height={"600px"}></Line>
        </div>
    );
}