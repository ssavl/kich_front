import React from 'react';
import PropTypes from 'prop-types';

import './styles.sass';

const Button = ({ className, label, size = 'm', type = 'main', onClick }) => {
    const classNameButton = ['Button'];
    if (size) classNameButton.push(`Button__${size}`)
    if (type) classNameButton.push(`Button__${type}`)
    if (className) {classNameButton.push(className)}

    return (
        <button className={classNameButton.join(' ')} onClick={onClick}>
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    size: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

export default Button;