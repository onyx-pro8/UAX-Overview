import React from "react";

const PriceCurveChart = () => {
    return (
        <div className="text-white rounded-xl w-full max-w-3xl mx-auto">
            <svg viewBox="0 0 300 200" className="w-full h-40">
                <path
                    d="M10 150 C 80 150, 160 100, 240 30"
                    fill="none"
                    stroke="#d946ef"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                />
                <circle cx="10" cy="150" r="4" fill="#d946ef" />
                <circle cx="80" cy="150" r="4" fill="#d946ef" />
                <circle cx="160" cy="100" r="4" fill="#d946ef" />
                <circle cx="240" cy="30" r="4" fill="#d946ef" />
                <line x1="240" y1="30" x2="240" y2="10" stroke="#d946ef" strokeWidth="2" />
                <circle cx="240" cy="10" r="4" fill="#d946ef" />
            </svg>

            <div className="flex justify-between mt-4 text-center text-sm text-gray-300">
                {["Stage 17", "Stage 17", "Stage 17", "Listing"].map((label, index) => (
                    <div key={index} className="chart-larbel">
                        <div>$ 0.01074</div>
                        <div>{label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PriceCurveChart;