import React from 'react';

export const Buy = () => {
    return (
        <div className='xl:w-1/2 w-full box active'>
            <div>
                <div className="header">
                    <h2>Buy UAXN</h2>
                </div>
                <div className="flex flex-col content">
                    <div className="mb-7 flex-between">
                        <div className='px-3 flex flex-col'>
                            <span className='min-title'>Total Token Sold</span>
                            <h2>843.62M</h2>
                        </div>
                        <div className='px-3 flex flex-col'>
                            <span className='min-title'>Price</span>
                            <h2>$0.007614</h2>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex-between'>
                            <span className="min-title">Amount Raised</span>
                            <span className="min-content">$5,507,321.22</span>
                        </div>
                        <div className='moblie:px-[19px] px-2 moblie:py-[9px] py-2 flex-center border-default'>
                            <h6>
                                Stage <span>14</span>
                            </h6>
                            <div className="progress">
                                <div className="success"></div>
                            </div>
                            <h6>1.84%</h6>
                        </div>
                        <div className='mb-5'>
                            <h6 className='text-[16px] font-light text-[#FFFFFFA6]'>Current Stage: <span>0.00K</span> / 12.35M</h6>
                        </div>
                        <div className="border-default flex-between switch">
                            <div className="eth flex-center w-1/2 active">
                                <h6 className='text-[16px] flex flex-center'>
                                    <i className='mr-2'>
                                        <img src="media/icons/eth.svg" alt="ETH" />
                                    </i>
                                    ETH
                                </h6>
                            </div>
                            <div className="usdt flex-center w-1/2">
                                <h6 className='text-[16px] flex flex-center'>
                                    <i className='mr-2'>
                                        <img src="media/icons/usdt.svg" alt="USDT" />
                                    </i>
                                    USDT
                                </h6>
                            </div>
                        </div>
                        <div className='mt-6 px-[6px] flex-between'>
                            <span className="min-title">Purchase Amount</span>
                            <span className="flex items-end leading-none min-title">
                                <h2 className='mr-3'>0.00</h2> ETH
                            </span>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="moblie:p-[22px] p-3 flex-between">
                        <span className='min-title'>Amount you’ll Get</span>
                        <span className='min-content'>0.00</span>
                    </div>
                </div>
                <div className='px-4'>
                    <button className='py-[14px] w-full'>Buy Tokens</button>
                </div>
            </div>
        </div>
    )
}