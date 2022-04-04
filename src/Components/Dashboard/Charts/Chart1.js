import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import useGraph from '../../../Hooks/useGraph';

const Chart1 = () => {
    const [graph, setGraph] = useGraph();
    return (
        <div>
            <div>
                <h1>Bar Chart</h1>
            </div>
            <div>
                <BarChart width={500} height={300} data={graph}>
                    <CartesianGrid strokeDasharray="5 5" />
                    <XAxis dataKey="month" />
                    <YAxis dataKey="sell" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                    <Bar dataKey="sell" fill="orange" />
                </BarChart>
            </div>
        </div>
    );
};

export default Chart1;