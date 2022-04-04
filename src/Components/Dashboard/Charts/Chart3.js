import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useGraph from '../../../Hooks/useGraph';

const Chart3 = () => {
    const [graph, setGraph] = useGraph();
    return (
        <div>
            <div>
                <h1>Line Graph</h1>
            </div>
            <div>
                <LineChart width={500} height={250} data={graph}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                </LineChart>
            </div>
        </div>
    );
};

export default Chart3;