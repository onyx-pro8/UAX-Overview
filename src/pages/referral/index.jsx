import React from 'react';

import { Intro } from '../../components/common/intro';
import { YourReferral } from './components/yourReferral';
import { HowWork } from './components/howWork';

export const Referral = () => {
    return (
        <div className='flex flex-col'>
            <Intro type={'earn'} />
            <div className="flex flex-wrap">
                <YourReferral />
                <HowWork />
            </div>
        </div>
    )
}