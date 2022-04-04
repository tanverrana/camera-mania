import React from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';
import "./MyPieChart.css";

const MyPieChart = ({ chart }) => {
    return (
        <div className="pie-chart">
            <h3>Investment Vs Revenue</h3>
            <PieChart width={730} height={250}>
                <Pie data={chart} dataKey="investment" nameKey="month" cx="30%" cy="50%" outerRadius={50} fill="#8884d8" />
                <Pie data={chart} dataKey="revenue" nameKey="month" cx="30%" cy="50%" innerRadius={50} outerRadius={80} fill="#82ca9d" label />
                <Tooltip></Tooltip>
            </PieChart>
        </div>
    );
};

export default MyPieChart;