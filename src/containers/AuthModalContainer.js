import React, {useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'
import {connect} from 'react-redux'

// Components
import Modal from "../components/Modal";
import Input from "../components/Input";

// Actions
import {openAuthModal} from '../redux/actions/authModal'
import {changeField, setUser} from '../redux/actions/auth'

import './AuthModalContainer.sass'

const AuthModalContainer = ({
                                isOpen,
                                openAuthModal,
                                username,
                                fieldUserName,
                                fieldPassword,
                                fieldFirstName,
                                fieldLastName,
                                fieldEmail,
                                changeField,
                                setUser,
                                isOpenAuthModal,
                            }) => {

    const [step, setStep] = useState('login')

    const handleRegistration = () => {
        axios.post('http://localhost:8000/api/v1/api/auth/register', {
            username: fieldUserName,
            first_name: fieldFirstName,
            last_name: fieldLastName,
            email: fieldEmail,
            password: fieldPassword,
        },).then(data => {
            setUser(data.data.username, data.data.first_name, data.data.last_name, data.data.email)
            localStorage.setItem('token', data.data.auth_token)
        })
        openAuthModal(!isOpenAuthModal)
    }

    const handleLogin = () => {
        axios.post('http://localhost:8000/api/v1/api/auth/login', {
            username: fieldUserName,
            password: fieldPassword,
        },).then(data => {
            setUser(data.data.id, data.data.username, data.data.first_name, data.data.last_name, data.data.email)
            localStorage.setItem('token', data.data.auth_token)
        })
        openAuthModal(!isOpenAuthModal)
    }

    const handleChangeField = (value, {field}) => {
        changeField(field, value)
    }

    const handleChangeStepRegistration = () => {
        setStep('registration')
    }

    const handleChangeStepLogin = () => {
        openAuthModal(!isOpen)
        setStep('login')
    }


    return (
        <>
            {step === 'login' && (
                <Modal isOpen={isOpen}
                       title={'Вход'}
                       confirmBtn={'Войти'}
                       onClose={handleChangeStepLogin}
                       onConfirm={handleLogin}>
                    <div className={'AuthModalContainer__input-wrapper'}>
                        <Input placeholder={'username'}
                               value={fieldUserName}
                               onChange={handleChangeField}
                               field={'username'}
                        />
                    </div>
                    <div className={'AuthModalContainer__input-wrapper'}>
                        <Input placeholder={'password'}
                               value={fieldPassword}
                               onChange={handleChangeField}
                               field={'password'}
                        />
                    </div>
                    <br/>
                    <div onClick={handleChangeStepRegistration} className={'AuthModalContainer__input-wrapper'}>
                        Регистрация
                    </div>
                </Modal>
            )}
            {step === 'registration' && (
                <Modal isOpen={isOpen}
                       title={'Регистрация'}
                       confirmBtn={'Войти'}
                       onClose={handleChangeStepLogin}
                       onConfirm={handleRegistration}>
                    <div className={'AuthModalContainer__input-wrapper'}>
                        <Input placeholder={'Логин'}
                               value={fieldUserName}
                               onChange={handleChangeField}
                               field={'username'}/>
                    </div>
                    <div className={'AuthModalContainer__input-wrapper'}>
                        <Input placeholder={'Имя'}
                               value={fieldFirstName}
                               onChange={handleChangeField}
                               field={'first_name'}/>
                    </div>
                    <div className={'AuthModalContainer__input-wrapper'}>
                        <Input placeholder={'Фамилия'}
                               value={fieldLastName}
                               onChange={handleChangeField}
                               field={'last_name'}/>
                    </div>
                    <div className={'AuthModalContainer__input-wrapper'}>
                        <Input placeholder={'Электронная почта'}
                               value={fieldEmail}
                               onChange={handleChangeField}
                               field={'email'}/>
                    </div>
                    <div className={'AuthModalContainer__input-wrapper'}>
                        <Input placeholder={'Пароль'}
                               value={fieldPassword}
                               onChange={handleChangeField}
                               field={'password'}/>
                    </div>


                </Modal>
            )}
        </>
    );
};

AuthModalContainer.propTypes = {};

const mapStateToProps = state => ({
    fieldUserName: state.authReducer.fields.username,
    fieldPassword: state.authReducer.fields.password,
    fieldFirstName: state.authReducer.fields.first_name,
    fieldLastName: state.authReducer.fields.last_name,
    fieldEmail: state.authReducer.fields.email,
    username: state.authReducer.auth.username,
    isOpenAuthModal: state.authModalReducer.isOpenAuthModal,

})

export default connect(mapStateToProps, {changeField, setUser, openAuthModal})(AuthModalContainer)