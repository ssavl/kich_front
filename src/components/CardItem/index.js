import React from 'react';
import PropTypes from 'prop-types';

import './styles.sass'
import Button from "../Button";

const CardItem = ({ title, price }) => {
    return (
        <div className={'CardItem'}>
            <div className={'CardItem__wrapper'}>
                <div className={'CardItem__body'}>
                    <div className={'CardItem__img'}/>
                    <div className={'CardItem__title'}>
                        {title}
                    </div>
                    <div className={'CardItem__text'}>
                        {price}
                    </div>
                    <div className={'CardItem__btn-wrapper'}>
                        <Button label={'Подробнее'}
                                onClick={_ => _}
                                type={'outline'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

CardItem.propTypes = {};

export default CardItem;