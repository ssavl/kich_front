import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar';
import moment from 'moment';

// Components
import Input from '../../atoms/Input';

// Constants
import ICONS from '../../../constants/icons';

// Icons
import { ReactComponent as IconArrowLeft } from '../../../img/icon-arrow-left.svg';
import { ReactComponent as IconArrowRight } from '../../../img/icon-arrow-right.svg';

// Hooks
import { useOnClickOutsideWithExclude, useOnClickOutside } from '../../../hook';

import './styles.sass';

const InputDate = props => {
    const {
        label,
        field,
        value,
        type = 'text',
        disabled = false,
        error,
        placeholder,
        maxDate,
        minDate,
        onBlur = _ => _,
        onChange = _ => _,
        onFocus = _ => _,
        onIconClick = _ => _,
    } = props;
    const [inputValue, setInputValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const calendarRef = useRef(null);
    const inputRef = useRef(null);

    let classInputDateCalendar = ['InputDate__calendar'];
    if (isOpen) classInputDateCalendar.push('open');

    const tileClassName = ({ date, view }) => {
        if (view === 'month') {
            const min = moment(minDate);
            const max = moment(maxDate);
            const d = moment(date);
            if (d.diff(min, 'days') === -1) {
                return 'disabled-last';
            }
            if (d.diff(max, 'days') === 0) {
                return 'disabled-first';
            }
            // if (d.diff(min, 'days') < 0 || d.diff(max, 'days') > 0) {
            //     return 'disabled';
            // }
        }
    };

    const handleCalendarToggle = () => {
        setIsOpen(!isOpen);
    };
    const handleCalendarOpen = () => {
        setIsOpen(true);
    };
    const handleCalendarClose = () => {
        setIsOpen(false);
    };

    const handleCalendarChange = date => {
        setIsOpen(false);
        onChange(date, { field });
    };

    const handleCalendarInputChange = value => {
        setInputValue(value);
    };

    const handleBlur = val => {
        const isDateValid = moment(val, 'DD.MM.YY').isValid();
        if (isDateValid) {
            onChange(moment(val, 'DD.MM.YY').toDate(), { field });
        } else {
            setInputValue(moment(value).format('DD.MM.YY'));
            onChange(value, { field });
        }
    };

    useEffect(() => {
        setInputValue(moment(value).format('DD.MM.YY'));
    }, [value]);

    useOnClickOutsideWithExclude(calendarRef, inputRef, handleCalendarClose, isOpen);

    const inputProps = {
        label,
        mask: '99.99.99',
        type,
        value: inputValue,
        error,
        field,
        disabled,
        placeholder,
        onFocus,
        onBlur: handleBlur,
        onChange,
        onIconClick,
    };

    return (
        <div className='InputDate'>
            <Input
                {...inputProps}
                ref={inputRef}
                icon={ICONS.CALENDAR}
                onFocus={handleCalendarOpen}
                onIconClick={handleCalendarToggle}
                onChange={handleCalendarInputChange}
            />
            <div className={classInputDateCalendar.join(' ')} ref={calendarRef}>
                {isOpen && (
                    <Calendar
                        nextLabel={<IconArrowRight />}
                        next2Label={null}
                        prevLabel={<IconArrowLeft />}
                        prev2Label={null}
                        maxDate={maxDate}
                        minDate={minDate}
                        tileClassName={tileClassName}
                        value={value}
                        onChange={handleCalendarChange}
                    />
                )}
            </div>
        </div>
    );
};

InputDate.propTypes = {
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

export default InputDate;
