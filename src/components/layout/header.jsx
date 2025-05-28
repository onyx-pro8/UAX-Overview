import React, { useContext } from 'react';

import PropTypes from 'prop-types';
import { GlobalContext } from '../context/globalContext';

import { datas } from '../datas';
import '../../assets/stylesheet/header.css';
import { NotificationIcon } from '../common/notification';

const ConnectWalletButton = ({ onClick }) => (
    <button
        className="btn"
        onClick={onClick}
        aria-label="Connect Wallet"
    >
        Connect Wallet
    </button>
);

ConnectWalletButton.propTypes = {
    onClick: PropTypes.func
};

export const Header = () => {
    const { state } = useContext(GlobalContext);
    const currentMenu = datas.menus[state.menuKey - 1];

    const handleWalletConnect = () => {
        // Add wallet connection logic here
        console.log('Connecting wallet...');
    };

    return (
        <header className="w-full header">
            <div className="flex-between">
                <div className="title">
                    <h1>{currentMenu?.content}</h1>
                </div>
                <div className="flex items-center">
                    <NotificationIcon />
                    <ConnectWalletButton onClick={handleWalletConnect} />
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    // Add any props if needed in the future
};