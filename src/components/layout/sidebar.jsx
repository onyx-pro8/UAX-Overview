import React, { useContext, useState } from 'react';

import { GlobalContext } from '../context/globalContext';

import '../../assets/stylesheet/sidebar.css';
import { datas } from '../datas';

import { MenuItem } from '../common/menuItem';

/**
 * MenuItem component for individual menu items
 * @param {Object} props - Component props
 * @param {string} props.link - Navigation link
 * @param {string} props.icon - Icon filename
 * @param {string} props.content - Menu item text
 * @param {Function} props.update - Function to update state
 * @param {Object} props.state - Current state object
 * @param {number} props.id - Menu item index
 */

/**
 * SideBar component that renders the application navigation menu
 */
export const SideBar = () => {
    const { state, updateState } = useContext(GlobalContext);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const getBorderTopPosition = () => {
        const isMobile = window.innerWidth < 768;
        return (Number(state.menuKey) - 1) * (isMobile ? 56 : 62);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <button
                className="mobile-menu-toggle md:hidden fixed top-4 left-4 z-50"
                onClick={toggleMobileMenu}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <div className={`pr-[22px] h-full w-full max-w-[230px] side-bar ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                <div className='w-full flex flex-col'>
                    <div className='logo'>
                        <img src="media/logo/uax logo.svg" alt="UAX Logo" />
                    </div>
                    <nav className='mt-[54px] w-full menu'>
                        <ul className='w-full'>
                            {datas.menus.map((menu, index) => (
                                <MenuItem
                                    key={index}
                                    id={index}
                                    link={menu.link}
                                    icon={menu.icon}
                                    content={menu.content}
                                    state={state}
                                    update={updateState}
                                />
                            ))}
                        </ul>
                    </nav>
                </div>
                <div
                    className="border"
                    style={{ top: `${getBorderTopPosition()}px` }}
                />
            </div>
            {isMobileMenuOpen && (
                <div
                    className="mobile-menu-overlay md:hidden"
                    onClick={toggleMobileMenu}
                />
            )}
        </>
    );
};