import React from 'react';

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export const Phone = ({ value, onChange }) => {
    return (
        <PhoneInput
            country={'in'}
            value={value}
            onChange={onChange}
            placeholder="Enter Phone No."
            inputClass="!bg-[#1b1c26] !text-white !w-full !border-none !pl-[68px] !pr-4 !py-[24px] placeholder:#FFFFFF59"
            containerClass="!w-full !bg-[#1b1c26] !shadow-none"
            buttonClass="!bg-transparent !border-none !rounded-l-md !pl-3"
            dropdownClass="!bg-[#1b1c26] !text-white"
        />);
}