import React from 'react'
import {Chart as ChartJs, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'

import {Bar, Line} from 'react-chartjs-2'

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)

function Chart() {

    const datas = [
        {
            "amount": 2000,
            "month": "JAN",
        },
        {
            "amount": 3500,
            'month': "FEB",
        },
        {
            "amount": 5600,
            "month": "JUN",
        },
        {
            "amount": 3600,
            "month": "JUL",
        },
    ]

    const data = {
        labels: datas.map((dat) =>{
            return dat.month
        }),
        datasets: [
            {
                label: 'Collection',
                data: [
                    ...datas.map((dat) => {
                        return dat.amount
                    })
                ],
                backgroundColor: 'blue',
                tension: .2
            },
        ]
    }


    return (
        <div className='chart-style'>
            <h2>Collection tracker</h2>
            <Line data={data} className='line-style'/>
            <Bar data={data} className='bar-style' />
        </div>
    )
}

export default Chart