import React from 'react';

// Data
import { datas } from '../../components/datas';

// Components
import { Intro } from '../../components/common/intro';
import { Step } from './components/step';
import { Warn } from './components/warn';

export const HowToBuy = () => {
    return (
        <div className='flex flex-col gap-6'>
            <Intro type={'buy'} />
            <div className="flex flex-wrap ">
                {datas.howToBuy.map((step, index) => (
                    <Step 
                        key={`step-${index}`}
                        data={step} 
                        id={index} 
                    />
                ))}
            </div>
            <Warn />
        </div>
    );
};