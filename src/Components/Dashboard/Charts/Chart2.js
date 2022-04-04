import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import useGraph from '../../../Hooks/useGraph';

const Chart2 = () => {
    const [graph, setGraph] = useGraph();
    return (
        <div>
            <div>
                <h1>Area Graph</h1>
            </div>
            <div>
                <AreaChart width={500} height={250} data={graph}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="month" />
                    <YAxis dataKey="sell" />
                    <CartesianGrid strokeDasharray="5 5" />
                    <Tooltip />
                    <Area type="monotone" dataKey="sell" stroke="#82ca9d" fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
            </div>
        </div>
    );
};

export default Chart2;