import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import "./MyLineChart.css";

const MyLineChart = ({ chart }) => {

    return (
        <div className="line-chart">
            <h3>Month Wise Sell</h3>
            <LineChart width={400} height={300} data={chart}>
                <Line dataKey={"sell"}></Line>
                <XAxis dataKey={"month"}></XAxis>
                <YAxis dataKey={"sell"}></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default MyLineChart;