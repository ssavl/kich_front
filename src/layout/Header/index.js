import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import logo from "../../img/Безымянный-1.png";
import {NavLink} from 'react-router-dom'

// Components
import {ReactComponent as Burger} from "../../img/menu.svg";
import AuthModalContainer from "../../containers/AuthModalContainer";


// Action
import {openAuthModal} from '../../redux/actions/authModal'
import {setOpenTopBar} from '../../redux/actions/topBar'

import './styles.sass'


const Header = ({isOpenAuthModal, openAuthModal, setOpenTopBar, username}) => {

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

            return (
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
    }, [isOpenTopBar])

    const handleTopBar = () => {
        setOpenTopBar(!isOpenTopBar)
    }

    useEffect(() => {
        console.log(isOpenAuthModal)
    }, [isOpenAuthModal])

    return (

        <>
            <div className={'Header__running-string'}>
                <div className={'Header__running-string-text'} style={{transform: `translateX(${stringPosition}px)`}}>
                    The most important part -- Community
                </div>
            </div>
            <div className={'Header'}>
                <NavLink to={'/'}>
                    <div className={'Header__logo-wrapper'}>
                        <img src={logo}/>
                    </div>
                </NavLink>

                <div className={'Header__gradient'}>
                    <div className={'Header__item-wrapper'}>
                        <NavLink to={'/'} className={'Header__item'}>
                            <b>Kich.ru</b>
                        </NavLink>
                        <div className={'Header__item'}>
                            <NavLink to={'/mens'}>Мужское</NavLink>
                        </div>
                        <div className={'Header__item'}>
                            <NavLink to={'/womens'}>Женское</NavLink>
                        </div>
                        <div className={'Header__item'}>
                            <NavLink to={'/accessories'}>Акссесуары</NavLink>
                        </div>
                        <div className={'Header__item'}>
                            {username ?
                                (<NavLink to={'/profile'}>👋🏻 {username}</NavLink>)
                                : (<div onClick={() => openAuthModal(!isOpenAuthModal)}>Профиль</div>)}
                        </div>
                    </div>
                </div>
                <div className={'Header__user-menu'}>
                    <div onClick={handleTopBar}><Burger/></div>
                </div>
            </div>
            <AuthModalContainer isOpen={isOpenAuthModal} openAuthModal={openAuthModal}/>
        </>
    );
};

Header.propTypes = {};

const mapStateToProps = (state) => ({
    username: state.authReducer.auth.username,
    isOpenAuthModal: state.authModalReducer.isOpenAuthModal,
    isOpenTopBar: state.topBarReducer.isOpenTopBar,
})

export default connect(mapStateToProps, {openAuthModal, setOpenTopBar})(Header)