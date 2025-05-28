import React from "react";

export const Calculate = () => {
    return (
        <div className='w-1/2 box'>
            <div>
                <div className="header">
                    <div className='px-5 flex-between'>
                        <span className='min-title'>Calculate This Profit</span>
                        <img src="media/icons/calculator.svg" alt="calculator" />
                    </div>
                </div>
                <div className="flex flex-col content">
                    <div className="mb-7 flex-between">
                        <div className='px-[14px] flex flex-col w-1/2'>
                            <span className='min-title'>Enter UAXN</span>
                            <div className="border-default flex-between input">
                                <span className='text-[#E22FFF]'>0.00</span>
                                <span className='text-white'>UAXN</span>
                            </div>
                        </div>
                        <div className='px-[14px] flex flex-col w-1/2'>
                            <span className='min-title'>USD Amount</span>
                            <div className="border-default flex-between input">
                                <span className='text-[#E22FFF]'>0.00</span>
                                <span className='text-white'>USD</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="p-[22px] flex-between">
                        <div className='flex'>
                            <h6 className='text-[16px] font-light'>
                                Stage: <span className='text-[20px] font-medium'>14</span>
                            </h6>
                        </div>
                        <div>
                            <h6 className='text-[16px] font-light text-[#FFFFFFA6]'>
                                Price: <span>0.008723</span>
                            </h6>
                        </div>
                    </div>
                    <div className='px-[22px] mb-3 flex-between'>
                        <img src="media/icons/previous.svg" alt="previous" />
                        <div className="progress">
                            <div className="success"></div>
                        </div>
                        <span className='min-content'>10%</span>
                        <img src="media/icons/next.svg" alt="next" />
                    </div>
                </div>
            </div>
        </div>
    )
}