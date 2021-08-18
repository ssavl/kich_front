import React  from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

// Components
import Button from "../../components/Button";
import AddItemContainer from "../../containers/AddItemContainer";
import MyItems from "./components/MyItems";


// Actions
import {
    setAddItemStep,
    setAddItemField,
    setAddItemModal,
    setUserItems,
} from '../../redux/actions/addNewItem'


import './styles.sass'


const PersonalAccount = ({
                             id,
                             username,
                             first_name,
                             last_name,
                             email,
                             user_img,

                             newItemModal,
                             addNewItemStep,
                             userItems,

                             title,
                             description,
                             price,
                             size,
                             brand,
                             category,
                             gender,
                             condition,
                             swap,
                             mail_delivery,
                             safe_deal,
                             country,
                             city,
                             model,
                             img,

                             setAddItemStep,
                             setAddItemField,
                             setAddItemModal,
                             setUserItems,
                         }) => {

    const item = {
        sellerId: id,
        title,
        description,
        price,
        size,
        category,
        gender,
        condition,
        swap,
        brand,
        mail_delivery,
        safe_deal,
        country,
        city,
        model,
        img,
    }

    const handleCloseNewItemModal = () => {
        setAddItemModal(!newItemModal)
        setAddItemStep('zero')
    }

    const handleLogOut = () => {
        localStorage.clear()
        window.location.reload();
    }

    const handleAddAvatar = () => {

    }

    return (

        <>
            <div className={'PersonalAccount'}>
                Профиль
            </div>
            <div className={'PersonalAccount__info'}>
                <div className={'PersonalAccount__username'}>
                    <div>Логин: <b>{username}</b></div>
                    <input  id={'file_avatar'} hidden={true} type="file"/>
                    {user_img === null && (<label className={'PersonalAccount__avatar'} for="file_avatar">+</label>)}
                    {user_img !== null && (<label className={'PersonalAccount__avatar'} for="file_avatar">
                        <img src={`http://127.0.0.1:8000${user_img}`} alt="user_img"/>
                    </label>)}
                </div>
                <hr/>
                <div className={'PersonalAccount__info-item'}>
                    Имя: <b>{first_name}</b>
                </div>
                <div className={'PersonalAccount__info-item'}>
                    Фамилия: <b>{last_name}</b>
                </div>
                <div className={'PersonalAccount__info-item'}>
                    Email: <b>{email}</b>
                </div>
                <div className={'PersonalAccount__add-item'}>
                    <Button label={'Добавить обьявление'} onClick={handleCloseNewItemModal}/>
                    <Button label={'Выйти'} onClick={handleLogOut}  />
                </div>
            </div>
            <MyItems userId={id} setUserItems={setUserItems} userItems={userItems}/>
            <AddItemContainer addNewItemStep={addNewItemStep}
                              newItemModal={newItemModal}
                              setAddItemField={setAddItemField}
                              setAddItemStep={setAddItemStep}
                              setAddItemModal={setAddItemModal}
                              handleCloseNewItemModal={handleCloseNewItemModal}
                              item={item}
            />
        </>
    );
};

PersonalAccount.propTypes = {};

const mapStateToProps = (state) => ({
    id: state.authReducer.auth.id,
    username: state.authReducer.auth.username,
    first_name: state.authReducer.auth.first_name,
    last_name: state.authReducer.auth.last_name,
    email: state.authReducer.auth.email,
    user_img: state.authReducer.auth.img,

    newItemModal: state.addNewItemReducer.newItemModal,
    addNewItemStep: state.addNewItemReducer.addNewItemStep,
    userItems: state.addNewItemReducer.userItems,

    title: state.addNewItemReducer.fields.title,
    description: state.addNewItemReducer.fields.description,
    price: state.addNewItemReducer.fields.price,
    size: state.addNewItemReducer.fields.size,
    category: state.addNewItemReducer.fields.category,
    gender: state.addNewItemReducer.fields.gender,
    brand: state.addNewItemReducer.fields.brand,
    condition: state.addNewItemReducer.fields.condition,
    swap: state.addNewItemReducer.fields.swap,
    mail_delivery: state.addNewItemReducer.fields.mail_delivery,
    safe_deal: state.addNewItemReducer.fields.safe_deal,
    country: state.addNewItemReducer.fields.country,
    city: state.addNewItemReducer.fields.city,
    model: state.addNewItemReducer.fields.model,
    img: state.addNewItemReducer.fields.img,
})

export default connect(mapStateToProps, {
    setAddItemStep,
    setAddItemField,
    setAddItemModal,
    setUserItems,
})(PersonalAccount)