import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

export const MenuItem = ({ link, icon, content, update, state, id }) => {
    const isActive = id + 1 === state.menuKey;

    return (
        <li className={isActive ? 'active' : ''}>
            <Link
                to={link}
                className='flex items-center'
                onClick={() => update({ menuKey: id + 1 })}
            >
                <i className='mr-[6px] w-6 h-6 flex-center'>
                    <img src={`media/icons/${icon}${isActive ? '' : ' grey'}.svg`} alt={content} />
                </i>
                {content}
            </Link>
        </li>
    );
};

MenuItem.propTypes = {
    link: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    update: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired
};