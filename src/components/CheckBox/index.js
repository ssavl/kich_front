import React from 'react';
import PropTypes from 'prop-types';

import './styles.sass';

const Checkbox = ({ disabled, field, error, label, value, onChange }) => {
    const handleClick = e => {
        e.preventDefault();
        if (!disabled) {
            onChange(value, { field });
        }
    };
    return (
        <div className='Checkbox'>
            <input type='checkbox' checked={value} className='Checkbox__input' />
            <span className='Checkbox__custom' onClick={handleClick} />
            {label && <div className='Checkbox__label'>{label}</div>}
        </div>
    );
};

Checkbox.propTypes = {};

export default Checkbox;
