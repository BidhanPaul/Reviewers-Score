import React from 'react';
import Chart1 from './Charts/Chart1';
import Chart2 from './Charts/Chart2';
import Chart3 from './Charts/Chart3';
import "./Dashboard.css";
const Dashboard = () => {
    return (
        <div className='graph-container'>
            <div className='dashboard-heading'>
                <h1>Dashboard Status</h1>
            </div>
            <div className='graph-view'>
                <div>
                    <Chart1></Chart1>
                </div>
                <div>
                    <Chart2></Chart2>
                </div>
                <div>
                    <Chart3></Chart3>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;