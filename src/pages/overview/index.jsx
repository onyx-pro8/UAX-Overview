import { Buy } from './components/buy';
import { Total } from './components/total';
import { Referral } from './components/referral';
import { Calculate } from './components/calculate';
import { Progress } from './components/progress';

export const Overview = () =>
    <div className='flex flex-col '>
        {/* Top Section: Buy and Info Cards */}
        <div className='flex flex-wrap w-full '>
            <Buy />
            <div className='xl:w-1/2 w-full flex flex-col '>
                <Total />
                <Referral />
            </div>
        </div>

        {/* Bottom Section: Calculator and Progress */}
        <div className='flex flex-wrap w-full '>
            <Calculate />
            <Progress />
        </div>
    </div>
