import React from "react";

export const Calculate = () => {
    return (
        <div className='xl:w-1/2 w-full box'>
            <div className="xl:min-h-[428px] min-h-auto">
                <div className="header">
                    <div className='px-5 flex-between'>
                        <span className='min-title'>Calculate This Profit</span>
                        <img src="media/icons/calculator.svg" alt="calculator" />
                    </div>
                </div>
                <div className="flex flex-col content">
                    <div className="mb-7 flex-between flex-wrap">
                        <div className='px-[14px] flex flex-col sm:w-1/2 w-full'>
                            <span className='min-title'>Enter UAXN</span>

                            <div className="flex-between input-box">
                                <input type="text" name="" id="" defaultValue={0.00} className="input input-label text-[#E22FFF]" />
                                <span className='min-content label'>UAXN</span>
                            </div>
                        </div>
                        <div className='px-[14px] flex flex-col sm:w-1/2 w-full'>
                            <span className='min-title'>USD Amount</span>
                            <div className="flex-between input-box">
                                <input type="text" name="" id="" defaultValue={0} className="input input-label text-[#E22FFF]" />
                                <span className='min-content label'>USD</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="moblie:p-[22px] p-3 flex-between">
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
                    <div className='px-[22px] mb-3 flex items-center sm:justify-between justify-center sm:gap-4 gap-2'>
                        <img src="media/icons/previous.svg" alt="previous" />
                        <div className="moblie:!block !hidden progress">
                            <div className="success"></div>
                        </div>
                        <span className='moblie:!block !hidden mb-0 min-content'>10%</span>
                        <img src="media/icons/next.svg" alt="next" />
                    </div>
                    <div className="w-full flex-between px-6 moblie:!hidden">
                        <div className="!m-0 !mr-2 !max-w-full progress">
                            <div className="success"></div>
                        </div>
                        <span className='mb-0 min-content'>10%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}