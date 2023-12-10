import React, { useState, useEffect } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Biểu đồ thống kê doanh thu',
    },
  },
}

export function BarChar() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Total Price',
        data: [],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Final Price',
        data: [],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/revenue')
        const data = await response.json()

        const updatedChartData = {
          labels: data.map((item) => `Tháng ${item.month}`),
          datasets: [
            {
              label: 'Total Price',
              data: data.map((item) => item.total_price),
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
              label: 'Final Price',
              data: data.map((item) => item.final_price),
              backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
          ],
        }

        setChartData(updatedChartData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return <Bar options={options} data={chartData} />
}
