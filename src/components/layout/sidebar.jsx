import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from '../context/globalContext';
import { datas } from '../datas';
import { MenuItem } from '../common/menuItem';
import '../../assets/stylesheet/sidebar.css';

// Constants
const MOBILE_BREAKPOINT = 768;
const MOBILE_ITEM_HEIGHT = 56;
const DESKTOP_ITEM_HEIGHT = 62;

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
 * MobileMenuButton component for toggling mobile menu
 */
const MobileMenuButton = ({ onClick }) => (
    <button
        className="mobile-menu-toggle md:hidden fixed top-4 left-4 z-50"
        onClick={onClick}
        aria-label="Toggle mobile menu"
    >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    </button>
);

MobileMenuButton.propTypes = {
    onClick: PropTypes.func.isRequired
};

/**
 * Logo component for the sidebar
 */
const Logo = () => (
    <div className='logo'>
        <img src="media/logo/uax logo.svg" alt="UAX Logo" />
    </div>
);

/**
 * SideBar component that renders the application navigation menu
 */
export const SideBar = () => {
    const { state, updateState } = useContext(GlobalContext);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const getBorderTopPosition = () => {
        
        const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
        console.log(isMobile);
        const itemHeight = isMobile ? MOBILE_ITEM_HEIGHT : DESKTOP_ITEM_HEIGHT;
        return (Number(state.menuKey) - 1) * itemHeight;
    };

    useEffect(() => {
        const handleResize = () => {
            getBorderTopPosition();
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [state.menuKey]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prev => !prev);
    };

    return (
        <>
            <MobileMenuButton onClick={toggleMobileMenu} />
            <div 
                className={`pr-[22px] h-full w-full max-w-[230px] side-bar ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}
            >
                <div className='w-full flex flex-col'>
                    <Logo />
                    <nav className='mt-[54px] w-full menu'>
                        <ul className='w-full'>
                            {datas.menus.map((menu, index) => (
                                <MenuItem
                                    key={menu.link}
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
                    aria-hidden="true"
                />
            )}
        </>
    );
};