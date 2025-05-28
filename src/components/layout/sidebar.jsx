import React, { useContext } from 'react';

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

    const getBorderTopPosition = () => {
        return 112 + (Number(state.menuKey) - 1) * 62;
    };

    return (
        <div className="pr-[22px] h-full w-full max-w-[230px] side-bar">
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
    );
};