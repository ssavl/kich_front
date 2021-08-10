import React from 'react';
import PropTypes from 'prop-types';

// Comonents
import Button from "../Button";

import './styles.sass'

const BlogItem = ({title, text, img}) => {
    return (
        <div className={'BlogItem'}>
            <div className={'BlogItem__body'}>
                <div className={'BlogItem__img-wrapper'}>
                    <img src={`http://127.0.0.1:8000${img}`} alt="img"/>
                </div>
                <div className={'BlogItem__title-wrapper'}>
                    {title}
                </div>
                <div className={'BlogItem__text-wrapper'}>
                    {text.substr(0, 100)}...
                </div>
                <Button type={'outline'} label={'Подробнее'} onClick={_ => _}/>
            </div>
        </div>
    );
}

BlogItem.propTypes = {};

export default BlogItem;