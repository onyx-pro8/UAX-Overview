import React from 'react';

export const Total = () => {
    return (
        <div className="box box-default">
            <div className='flex flex-col'>
                <div className='flex flex-col p-[22px]'>
                    <span className='min-title'>Total Token Sold</span>
                    <h2 className='active'>0.00</h2>
                </div>
                <div className='flex-between center-line mb-10'>
                    <div className='px-3 flex flex-col'>
                        <span className='min-title'>Token Worth</span>
                        <h2>843.62M</h2>
                    </div>
                    <div className='px-3 flex flex-col'>
                        <span className='min-title'>Worth at Launch</span>
                        <h2>$0.007614</h2>
                    </div>
                </div>
                <button className='w-full btn btn-ghost'>Connect Wallet</button>
            </div>
        </div>
    )
}