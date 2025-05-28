import React from 'react';

import { datas } from '../../components/datas';

import { Intro } from '../../components/common/intro';
import { Step } from './components/step';

export const HowToBuy = () => {
    return (
        <div className='flex flex-col'>
            <Intro type={'buy'} />
            <div className="flex flex-wrap">
                {
                    datas.howToBuy.map((_itm, _idx) => (
                        <Step data={_itm} id={_idx} key={_idx} />
                    ))
                }
            </div>
        </div>
    )
}