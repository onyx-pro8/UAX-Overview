import React from "react";

export const Step = ({ data, id }) => {
    return (
        <div className="lg:w-1/2 w-full box box-step">
            <div className='min-h-[220px]'>
                <div className='flex flex-col items-center'>
                    <div className="mb-4 Nr large">{id + 1}</div>
                    <span className="my-3 mx-4 text-[18px] text-center font-normal min-content">
                        {data.title}
                    </span>
                    <span className='min-title leading-5 text-center'>
                        {data.content}
                    </span>
                </div>
            </div>
        </div>
    )
}