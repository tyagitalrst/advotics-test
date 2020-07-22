import React from 'react';
import { Bar } from 'react-chartjs-2';



export default function MarketInsight(props) {
    var labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];


    window.chartColors = {
        net: 'rgba(55, 176, 76, 0.5)',
        gross: 'rgba(40, 158, 69, 0.5)',
        apv: 'rgba(22, 226, 140, 0.5)',
        upt: 'rgba(112, 112, 112, 0.5)',
        line: 'rgba(75, 192, 192, 0.5)',
    };

    var barChartData = {
        labels: labels,
        datasets: [
            {
                label: 'Nett',
                backgroundColor: [
                    window.chartColors.net,
                ],
                yAxisID: "y-axis-1",
                data: props.dataNett
            },
            {
                label: 'Gross',
                backgroundColor: window.chartColors.gross,
                yAxisID: "y-axis-1",
                data: props.dataGross
            },
            {
                label: 'Average Purchase Value',
                backgroundColor: window.chartColors.apv,
                data: props.dataAPV
            },
            {
                label: 'Unit per Transaction',
                backgroundColor: window.chartColors.upt,
                data: props.dataUPT,
            },
            {
                label: '-',
                yAxisID: "y-axis-2",
                data: props.dataLine,
                type: 'line',
                borderColor: [
                    window.chartColors.net,
                ],
            }
        ]

    };

    const config = {
        type: 'bar',
        data: barChartData,
        options: {
            responsive: true,
            title: {
                display: false,
            },
            legend: {
                position: 'bottom',
                labels: {
                    filter: function (item) {
                        return !item.text.includes('-');
                    }
                }
            },
            tooltips: {
                mode: 'index',
                intersect: true,
            },
            scales: {
                xAxes: [{
                    stacked: true
                }],
                yAxes: [{
                    type: "linear",
                    stacked: true,
                    display: true,
                    position: "left",
                    id: "y-axis-1",
                    ticks: {
                        beginAtZero: true,
                        suggestedMin: 0,
                        suggestedMax: 10,
                        min: 0
                    }
                }, {
                    type: "linear",
                    display: false,
                    id: "y-axis-2",
                    ticks: {
                        beginAtZero: true,
                        suggestedMin: 0,
                        suggestedMax: 10,
                        min: 0
                    }
                }],
            }
        }
    };

    return (
        <Bar data={config.data} options={config.options} />
    );
}
