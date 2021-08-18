import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

// Components
import CardItem from "../../../../components/CardItem";

import './styles.sass'
import axios from "axios";


const MyItems = ({userId, setUserItems, userItems}) => {

    const handleGetUserItems = () => {
        const form_dadata = new FormData()
        form_dadata.append('id', userId)
        axios.post('http://127.0.0.1:8000/api/v1/get-items', form_dadata)
            .then(data => {
                setUserItems(data.data)
            })
    }

    useEffect(() => {
        if (userId) handleGetUserItems()
    }, [userId])


    return (
        <>
            <div className={'MyItems'}>
                Мои обьявления
            </div>
            <div className={'MyItems__items-card'}>
                <div className={'MyItems__items-grid'}>
                    {userItems && userItems.map((data) => {
                        return (
                            <CardItem title={data.title}
                                      price={data.price}
                                      img={data.img}/>
                        )
                    })}
                </div>
            </div>
        </>
    );
};

MyItems.propTypes = {};

export default MyItems;