import React from "react";

import StageProgressChart from "./curve";

export const Progress = () => {
    return (
        <div className='xl:w-1/2 w-full box'>
            <div className="min-h-[428px]">
                <div className="header">
                    <div className='px-5 flex-between'>
                        <span className='min-title'>Stage Progress</span>
                    </div>
                </div>
                <div className="flex flex-col content">
                    <div className="mb-7 flex-center">
                        <StageProgressChart />
                    </div>
                </div>
            </div>
        </div>
    )
}