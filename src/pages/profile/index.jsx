import { Phone } from './components/phone';

export const Profile = () =>
    <div className='h-full flex-center'>
        <div className="box w-full max-w-[820px] profile">
            <div className="flex flex-col">
                <span className="my-[27px] mx-[7px] text-[18px] min-content">
                    Subscription
                </span>
                <div className="p-[7px] w-full">
                    <input type="text" className='input' placeholder='Enter Full Name' />
                </div>
                <div className='p-[7px] w-full phone'>
                    <Phone />
                </div>
                <div className="p-[7px] w-full">
                    <input type="text" className='input' placeholder='Enter Email Address' />
                </div>
                <div className='py-[14px] px-[7px] flex items-center'>
                    <input type="checkbox" name="" id="" className='!w-5 h-5 mr-3' />
                    <p className='text-[14px]'>By submitting this you agree to our Terms and Privacy Policy</p>
                </div>
                <div className='px-[7px] my-[26px]'>
                    <button className='w-full'>Register</button>
                </div>
            </div>
        </div>
    </div>