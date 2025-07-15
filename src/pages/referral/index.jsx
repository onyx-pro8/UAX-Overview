import { Intro } from '../../components/common/intro';

// Page Components
import { YourReferral } from './components/yourReferral';
import { HowWork } from './components/howWork';

export const Referral = () =>
    <div className='flex flex-col gap-6'>
        <Intro type={'earn'} />
        <div className="flex flex-wrap ">
            <YourReferral />
            <HowWork />
        </div>
    </div>
