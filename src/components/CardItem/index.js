import React from 'react';
import PropTypes from 'prop-types';

// Components
import Button from "../Button";

// Utils
import { formatPriceNumber } from '../../utils/formatters'

import './styles.sass'


const CardItem = ({img, title, price, onClick}) => {
    return (
        <div className={'CardItem'}>
            <div className={'CardItem__body'}>
                <div className={'CardItem__img-wrapper'}>
                    <img className={'CardItem__img'} src={`http://127.0.0.1:8000${img}`} alt="img"/>
                </div>
                <div className={'CardItem__title'}>
                    {title}
                </div>
                <div className={'CardItem__text'}>
                    {formatPriceNumber(price)}
                </div>
                <div className={'CardItem__btn-wrapper'}>
                    <Button label={'Подробнее'}
                            onClick={onClick}
                            type={'outline'}/>
                </div>
            </div>
        </div>
    );
};

CardItem.propTypes = {};

export default CardItem;