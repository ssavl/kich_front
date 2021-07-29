import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';


import './styles.sass'
import CardItem from "../../components/CardItem";

const Home = props => {



    const items = [
        {
            id: 1,
            title: 'Важный айтем',
            price: '85$'
        },
        {
            id: 1,
            title: 'Очень крутой айтем',
            price: '825$'
        },
        {
            id: 1,
            title: 'Самый рарный айтем',
            price: '120$'
        },
    ]

    return (
        <div className={'Home'}>
            <div className={'Home__ultimate-text'}>
                The most important part <br/>
                -- Community
            </div>
            <div className={'Home__title'}>
                New items
            </div>
            <div className={'Home__random-items'}>
                <div className={'Home__random-items-first'}>
                    <CardItem title={'Lorem ipsum dolor.'} price={'85&'}/>
                </div>
                <div className={'Home__random-items-second'}>
                    <CardItem title={'Lorem ipsum dolor.'} price={'85&'}/>
                </div>
                <div className={'Home__random-items-third'}>
                    <CardItem title={'Lorem ipsum dolor.'} price={'85&'}/>
                </div>
                <div className={'Home__random-items-fourth'}>
                    <CardItem title={'Lorem ipsum dolor.'} price={'85&'}/>
                </div>
            </div>
            <br/>
            <div className={'Home__parent-grid'}>
                {items.map((item, index) => <div className={'Home__parent-grid-item'}>
                                <CardItem title={item.title} price={item.price} />
                            </div>)}

            </div>

        </div>
    );
};

Home.propTypes = {};

export default Home;