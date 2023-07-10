import React from "react";
import  Chart  from "chart.js/auto";



const ChartGraph = () =>
    {
        const ctx = document.getElementById('acquisitions');

    new Chart (ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
        }]
    },
    options: {
        scales: {
        y: {
            beginAtZero: true
        }
        }
    }
    });

    return (

        <div id='acquisitions'></div>
    );


    }

export default ChartGraph;