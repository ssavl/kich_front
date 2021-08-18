import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Collapsible from 'react-collapsible';
import Flag from 'react-flagkit';

// Components
import { ReactComponent as IconArrowDown } from '../../img/icon-arrow-down.svg';

// Constants
import KEY_CODES from '../../constants/keyCodes';

import './styles.sass';

const InputSelect = props => {
    const {
        label,
        field,
        value,
        type = 'text',
        disabled = false,
        error,
        placeholder,
        options,
        icons,
        onBlur = _ => _,
        onChange = _ => _,
        onFocus = _ => _,
    } = props;

    const [isOpen, setIsOpen] = useState(false);
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [cursor, setCursor] = useState(0);

    useEffect(() => {
        if (options) {
            setFilteredOptions(options);
        }
    }, []);

    useEffect(() => {
        const optionName = (
            (options && !!options.length && options.find(option => option.id === value)) ||
            {}
        ).name;
        setInputValue(optionName);
    }, [value]);

    let classInputSelect = ['InputSelect__input'];
    if (icons) classInputSelect.push(`InputSelect__with-icon`);
    if (error) classInputSelect.push(`InputSelect__error`);
    if (disabled) classInputSelect.push('InputSelect__disabled');

    const handleOptionsOpen = () => {
        setIsOpen(!isOpen);
        if (isOpen) {
            setCursor(0);
        }
    };

    const handleOptionClick = id => {
        onChange(id, props);
        setIsOpen(false);
        setCursor(0);
        const optionName = (
            (options && !!options.length && options.find(option => option.id === id)) ||
            {}
        ).name;
        setInputValue(optionName);
    };

    const handleInputChange = e => {
        const value = e.target.value;
        setInputValue(value);
        setIsOpen(true);
        const filterOptions = options.filter(option =>
            option.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredOptions(filterOptions);
    };

    const handleFocus = () => {
        setIsOpen(true);
    };

    const handleKeyDown = e => {
        if (e.keyCode === KEY_CODES.ARROW_UP && cursor > 0) {
            setCursor(cursor - 1);
        } else if (e.keyCode === KEY_CODES.ARROW_DOWN && cursor < filteredOptions.length - 1) {
            setCursor(cursor + 1);
        } else if (e.keyCode === KEY_CODES.ENTER) {
            const id = (filteredOptions.find((option, i) => i === cursor) || {}).id;
            handleOptionClick(id);
        }
    };

    const inputSelectProps = {
        type,
        value: inputValue,
        field,
        disabled,
        placeholder,
        onFocus: handleFocus,
        onBlur,
        onChange: handleInputChange,
        onKeyDown: handleKeyDown,
    };

    return (
        <div className='InputSelect'>
            {label && <div className='InputSelect__label'>{label}</div>}
            <div className='InputSelect__wrapper' onKeyDown={handleKeyDown}>
                <div className='InputSelect__wrapper-bg'>
                    <div className='InputSelect__input-wrapper'>
                        {icons === 'flags' && (
                            <div className='InputSelect__icon'>
                                <Flag country={value.toUpperCase()} />
                            </div>
                        )}
                        <input className={classInputSelect.join(' ')} {...inputSelectProps} />
                        <button onClick={handleOptionsOpen} className={'InputSelect__icon-button'}>
                            <IconArrowDown />
                        </button>
                    </div>
                    <div className='InputSelect__options'>
                        <Collapsible open={isOpen} transitionTime={200}>
                            {filteredOptions.map((option, i) => (
                                <div
                                    key={option.id}
                                    className={`InputSelect__options__option${
                                        cursor === i || value === option.id ? ' active' : ''
                                    }`}
                                    onClick={() => handleOptionClick(option.id)}
                                >
                                    {icons === 'flags' && (
                                        <div className='InputSelect__options__option__icon'>
                                            <Flag country={option.id.toUpperCase()} />
                                        </div>
                                    )}
                                    {option.name}
                                </div>
                            ))}
                        </Collapsible>
                    </div>
                </div>
            </div>
            {error && <div className='InputSelect__message error'>{error}</div>}
        </div>
    );
};

InputSelect.propTypes = {
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

export default InputSelect;
