import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import "./MyLineChart.css";

const MyLineChart = () => {
    const [chart, setChart] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setChart(data))
    }, [])

    return (
        <div className="line-chart">
            <h3>Month Wise Sell</h3>
            <LineChart width={400} height={400} data={chart}>
                <Line dataKey={"sell"}></Line>
                <XAxis dataKey={"month"}></XAxis>
                <YAxis dataKey={"sell"}></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default MyLineChart;