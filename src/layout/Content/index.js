import React from 'react';
import PropTypes from 'prop-types';

import './styles.sass'

const Content = ({children}) => {
    return (
        <div className={'Content'}>
            <div className={'Content__layout-wrapper'}>
                <div className={'Content__layout-fragment'}>
                    <div className={'Content__layout-fragment-item'}/>
                    <div className={'Content__layout-fragment-item'}/>
                    <div className={'Content__layout-fragment-item'}/>
                </div>
                <div className={'Content__layout'}>
                    {children}
                </div>
            </div>
        </div>
    );
};

Content.propTypes = {};

export default Content;