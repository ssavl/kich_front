import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import logo from "../../img/Безымянный-1.png";

// Components
import {ReactComponent as Burger} from "../../img/menu.svg";
import {ReactComponent as Close} from "../../img/icon-close.svg";
import TopBar from "../../page/Home/components/TopBar";


import './styles.sass'

const Header = ({}) => {

    const [isOpenTopBar, setTopBar] = useState(false)
    const [stringPosition, setPosition] = useState(0)
    const [stringStatus, setStatus] = useState(false)

    useEffect(() => {
        const x = setInterval(() => {
            if (stringStatus === false) {
                setPosition(stringPosition + 1)
                if (stringPosition === 1150) {
                    setStatus(true)
                }
            }
            if (stringStatus === true) {
                setPosition(stringPosition - 1)
                if (stringPosition === -1) {
                    setStatus(false)
                }
            }

            return(
                clearInterval(x)
            )
        }, 10)
    }, [stringPosition])


    useEffect(() => {
        if (isOpenTopBar) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
    },[isOpenTopBar])

    const handleTopBar = () => {
        setTopBar(!isOpenTopBar)
    }

    return (

        <>
            <div className={'Header__running-string'}>
                <div className={'Header__running-string-text'} style={{transform: `translateX(${stringPosition}px)`}}>
                    The most important part -- Community
                </div>
            </div>
            <div className={'Header'}>
                <div className={'Header__logo-wrapper'}>
                    <img src={logo}/>
                </div>
                <div className={'Header__gradient'}>
                    <div className={'Header__item-wrapper'}>
                        <div className={'Header__item'}>
                            <b>Kich.ru</b>
                        </div>
                        <div className={'Header__item'}>
                            Мужское
                        </div>
                        <div className={'Header__item'}>
                            Женское
                        </div>
                        <div className={'Header__item'}>
                            Аксессуары
                        </div>
                        <div className={'Header__item'}>
                            Электроника
                        </div>

                    </div>
                </div>
                <TopBar isOpen={isOpenTopBar}/>
                <div className={'Header__user-menu'}>
                    {!isOpenTopBar ?
                        <div onClick={handleTopBar}><Burger/></div>
                        :  <div onClick={handleTopBar}><Close/></div>
                    }
                </div>
            </div>
        </>
    );
};

Header.propTypes = {};

export default Header;