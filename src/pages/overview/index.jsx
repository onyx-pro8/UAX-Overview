import React from 'react';

import { Buy } from './components/buy';
import { Total } from './components/total';
import { Referral } from './components/referral';
import { Calculate } from './components/calculate';
import { Progress } from './components/progress';

export const Overview = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-wrap w-full'>
                <Buy />
                <div className='xl:w-1/2 w-full flex flex-col'>
                    <Total />
                    <Referral />
                </div>
            </div>
            <div className='flex flex-wrap w-full'>
                <Calculate />
                <Progress />
            </div>
        </div>
    )
}