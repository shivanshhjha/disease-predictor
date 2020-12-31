import React, { useState, useEffect} from 'react'
import {Line} from 'react-chartjs-2'
import numeral from 'numeral'

const options = {
    legend: {
        display: false,
    },
    elements: {
        points: {
            radius: 0,
        }
    },
    maintainAspectRatio: false,
    // when hover over graph we see what init
    tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {
            label: function (tooltipItem, data) {
                return numeral(tooltipItem.value).format("+0,0")
            }
        }
    },
    scales: {
        xAxes: [
            {
                type: "time",
                time: {
                    format: "MM/DD/YYYY",
                    tooltipFormat: "ll"
                }
            }
        ],
        yAxes: [
            {
                gridLines: {
                    display: false,
                },
                ticks: {
                    callback : function(value, index, values){
                        return numeral(value).format("0a")
                    }
                }
            }
        ]
    }
    
}

const buildChartData = (data, casesType='cases' ) => {
    const chartData = []
    let lastDataPoint
    for(let date in data.cases) {
        if (lastDataPoint){
            const newDataPoint = {
                x : date,
                y : data[casesType][date] - lastDataPoint
            }
            chartData.push(newDataPoint)
        }
        lastDataPoint = data[casesType][date]
    };
    return chartData
}

function LineGraph() {

    const [data, setData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=90')
                .then(response => {return response.json()})
                .then((data) => {
                        //function to get data
                        console.log(data)
                    let chartData = buildChartData(data, 'cases')
                    setData(chartData)
                    console.log(chartData)
                })
        }
        fetchData()
    }, [])

    

    return (
        <div>
            {/* <h1>Im line</h1> */}
            
            {data?.length > 0 && (
                <Line
                options = {options}
                data = {{
                    datasets: [{
                        backgroundColor: 'rgba(204, 16, 52, 0.4)',
                        borderColor: '#CC1034', 
                        data: data
                    }]
                }}
                
            />
            )}
            
        </div>
    )
}

export default LineGraph
