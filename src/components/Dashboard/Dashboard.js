import React, { useEffect, useState } from 'react';
import MyLineChart from '../MyLineChart/MyLineChart';
import MyPieChart from '../MyPieChart/MyPieChart';
import "./Dashboard.css"

const Dashboard = () => {
    const [chart, setChart] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setChart(data))
    }, []);
    return (
        <div className="dashboard">
            <MyLineChart chart={chart}></MyLineChart>
            <MyPieChart chart={chart}></MyPieChart>
        </div>
    );
};

export default Dashboard;