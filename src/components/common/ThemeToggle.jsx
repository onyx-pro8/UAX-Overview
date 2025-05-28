import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="rounded-full md:w-[45px] w-[32px] md:h-[45px] h-[32px] mr-4 transition-colors duration-200 flex-center"
            aria-label="Toggle theme"
        >
            {isDarkMode ? (
                <i className="fas fa-sun md:text-[16px] text-[14px]"></i>
            ) : (
                <i className="fas fa-moon md:text-[16px] text-[14px] text-black"></i>
            )}
        </button>
    );
};

export default ThemeToggle; 