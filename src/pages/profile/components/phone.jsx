import React from 'react';
import { useTheme } from '../../../context/ThemeContext';

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export const Phone = ({ value, onChange }) => {
    const { isDarkMode } = useTheme();

    return (
        <PhoneInput
            country={'in'}
            value={value}
            onChange={onChange}
            placeholder="Enter Phone No."
            inputClass={`${isDarkMode ? '!bg-[#1b1c26]' : '!bg-transparent'} ${isDarkMode ? '!text-white' : '!text-black'} !w-full !border-none !pl-[68px] !pr-4 !py-[24px] placeholder:#FFFFFF59`}
            containerClass={`!w-full ${isDarkMode ? '!bg-[#1b1c26]' : '!bg-transparent'} !shadow-none`}
            buttonClass="!bg-transparent !border-none !rounded-l-md !pl-3"
            dropdownClass={`${isDarkMode ? '!bg-[#1b1c26]' : '!bg-white'} ${isDarkMode ? '!text-white' : '!text-black'}`}
        />);
}