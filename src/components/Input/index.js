import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';

// Components
import { ReactComponent as CloseSVG } from '../../img/icon-close.svg';

import './styles.sass';

const Input = props => {
    const {
        label,
        field,
        value,
        type = 'text',
        disabled = false,
        error,
        placeholder,
        mask,
        onBlur = _ => _,
        onChange = _ => _,
        onFocus = _ => _,
        onCancel = _ => _,
    } = props;

    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = e => {
        e.preventDefault();
        setIsFocused(true);
        onFocus();
    };

    const handleBlur = e => {
        e.preventDefault();
        setIsFocused(false);
        onBlur(value, props);
    };

    const handleChange = event => {
        event.preventDefault();
        onChange(event.target.value, props);
    };

    let classInput = ['Input__input'];
    if (error) classInput.push('Input__error');
    if (disabled) classInput.push('Input__disabled');

    const AllInputProps = {
        mask,
        type,
        value,
        field,
        disabled,
        placeholder,
        onFocus: handleFocus,
        onBlur: handleBlur,
        onChange: handleChange,
    };

    return (
        <div className={'Input__wrapper'}>
            {label && <div className='Input__label' >{label}</div>}
            <div className={'Input__border-wrapper'}>
                {mask ? (
                    <InputMask className={classInput.join(' ')} {...AllInputProps} />
                ) : (
                    <input className={classInput.join(' ')} {...AllInputProps} />
                )}
                <div className='Input__border' />
                {!isFocused && value && !disabled && (
                    <button onClick={onCancel} className={'Input__close-button'}>
                        <CloseSVG />
                    </button>
                )}
            </div>
            {error && <div className='Input__message error'>{error}</div>}
        </div>
    );
};

Input.propTypes = {
    field: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    label: PropTypes.string,
    mask: PropTypes.string,
    placeholder: PropTypes.string,
    onBlur: PropTypes.func,
    onCancel: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
};

export default Input;