import React from 'react';
import PropTypes from 'prop-types';

import './styles.sass'


const RadioButton = ({id, checked, name, onChange}) => {

    const handleChangeCreditCard = () => {
        onChange(id)
    }

    return (
        <>
            <label className="RadioButton">
                <input type="radio" name={name} checked={checked} onChange={handleChangeCreditCard}/>
                <span/>
            </label>
        </>
    );
};

RadioButton.propTypes = {
    checked: PropTypes.bool
};

export default RadioButton;
