import React from 'react';

import { datas } from '../../../components/datas';

export const HowWork = () => {
    return (
        <div className="lg:w-1/2 w-full box box-work">
            <div className='flex flex-col'>
                <span className="my-2 mx-4 min-content">
                    How it Works?
                </span>
                <div className='flex-between xl:flex-nowrap flex-wrap'>
                    {
                        datas.howWork.map((_itm, _idx) => (
                            <div key={_idx} className="flex flex-col p-[9px] xl:w-1/3 w-full">
                                <div className="Nr">
                                    {_idx + 1}
                                </div>
                                <p>{_itm}</p>
                            </div>
                        ))
                    }
                </div>
                {/* <button className='w-full btn btn-ghost'>Connect Wallet</button> */}
            </div>
        </div>
    )
}