import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Dot,
} from "recharts";

const data = [
    { name: "Stage 17", price: 0.01074 },
    { name: "Stage 17", price: 0.03074 },
    { name: "Stage 17", price: 0.05074 },
    { name: "Listing", price: 0.09074 },
];

const CustomDot = (props) => {
    const { cx, cy, index } = props;
    if (index === 0) {
        return (
            <circle
                cx={cx}
                cy={cy}
                r={6}
                stroke="#A855F7"
                strokeWidth={2}
                fill="#0D0B1E"
            />
        );
    }
    if (index === data.length - 1) {
        return (
            <circle cx={cx} cy={cy} r={4} fill="#A855F7" />
        );
    }
    return null;
};

export default function StageProgressChart() {
    return (
        <div className="p-4 rounded-2xl shadow-lg w-full text-white">
            <h2 className="text-gray-400 mb-4 text-sm">Stage Progress</h2>
            <ResponsiveContainer width="100%" height={200}>
                <LineChart data={data} margin={{ top: 10, right: 20, left: 20, bottom: 10 }}>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} stroke="#6B7280" />
                    <YAxis hide domain={[0.0107, 0.01075]} />
                    <Tooltip
                        formatter={(value) => [`$ ${value}`, ""]}
                        contentStyle={{ backgroundColor: "#1F2937", borderColor: "#A855F7" }}
                    />
                    <Line
                        type="monotone"
                        dataKey="price"
                        stroke="#A855F7"
                        strokeWidth={2}
                        dot={<CustomDot />}
                        strokeDasharray="4 2"
                    />
                </LineChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-4 text-center text-xs text-gray-400">
                {data.map((item, index) => (
                    <div key={index}>
                        <div className="text-white font-medium">$ {item.price}</div>
                        <div>{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
