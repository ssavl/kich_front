import React, {useState} from 'react';
import PropTypes from 'prop-types';

// Components
import Model from "../components/Modal";
import Input from "../components/Input";
import Modal from "../components/Modal";
import axios from "axios";


const AddItemContainer = ({
                              handleCloseNewItemModal,
                              addNewItemStep,
                              newItemModal,
                              setAddItemField,
                              setAddItemStep,
                              setAddItemModal,
                              item
                          }) => {

    const [img, setImg] = useState(null)

    const handleChangeField = (value, {field}) => {
        setAddItemField(field, value)
    }

    const handleChangeStep = (value) => {
        setAddItemStep(value)
    }


    const handleCreateItem = () => {
        let slug = (Math.random() + 1).toString(36).substring(7)
        let form_data = new FormData();
        form_data.append('title', item.title)
        form_data.append('description', item.description)
        form_data.append('price', item.price)
        form_data.append('size', item.size)
        form_data.append('category', item.category)
        form_data.append('gender', item.gender)
        form_data.append('brand', item.brand)
        form_data.append('condition', item.condition)
        form_data.append('country', item.country)
        form_data.append('city', item.city)
        form_data.append('model', item.model)
        form_data.append('seller', item.sellerId)
        form_data.append('img', item.img)
        form_data.append('slug', slug)

        axios.post('http://127.0.0.1:8000/api/v1/random-goods', form_data)
            .then(data => {
                console.log(data.data)
            })
    }

    const handleInputChange = async (event) => {
        event.preventDefault()
        await setAddItemField('img', event.target.files[0])
    }

    return (
        <>
            {addNewItemStep === 'zero' && (
                <Model isOpen={newItemModal}
                       onClose={handleCloseNewItemModal}
                       title={'Выбирете категорию'}
                       onConfirm={() => handleChangeStep('first')}
                       confirmBtn={'Продолжить'}>
                    <Input type={'text'}
                           field={'category'}
                           value={item.category}
                           onChange={handleChangeField}/>
                </Model>)}
            {addNewItemStep === 'first' && (
                <Model isOpen={newItemModal}
                       onClose={handleCloseNewItemModal}
                       title={'Название'}
                       onConfirm={() => handleChangeStep('second')}
                       confirmBtn={'Продолжить'}>
                    <Input placeholder={'Название'}
                           value={item.title}
                           onChange={handleChangeField}
                           field={'title'}/>
                    <Input placeholder={'Описание'}
                           value={item.description}
                           onChange={handleChangeField}
                           field={'description'}/>
                    <Input placeholder={'Цена'}
                           value={item.price}
                           onChange={handleChangeField}
                           field={'price'}/>
                </Model>)}
            {addNewItemStep === 'second' && (
                <Model isOpen={newItemModal}
                       onClose={handleCloseNewItemModal}
                       title={'Фотография'}
                       onConfirm={() => handleChangeStep('third')}
                       confirmBtn={'Продолжить'}>
                    <input type={'file'}
                           name={'file'}
                           onChange={handleInputChange}/>
                </Model>)}
            {addNewItemStep === 'third' && (
                <Modal isOpen={newItemModal}
                       onClose={handleCloseNewItemModal}
                       title={'Товар уже выставлен! Остался последний шаг👇🏻'}
                       onConfirm={() => handleChangeStep('success')}
                       confirmBtn={'Добавить'}>
                    <Input placeholder={'Размер'}
                           value={item.size}
                           onChange={handleChangeField}
                           field={'size'}/>
                    <Input placeholder={'Бренд'}
                           value={item.brand}
                           onChange={handleChangeField}
                           field={'brand'}/>
                    <Input placeholder={'Состояние'}
                           value={item.condition}
                           onChange={handleChangeField}
                           field={'condition'}/>
                    <Input placeholder={'Модель'}
                           value={item.model}
                           onChange={handleChangeField}
                           field={'model'}/>
                    <Input placeholder={'Гендер'}
                           value={item.gender}
                           onChange={handleChangeField}
                           field={'gender'}/>
                    <Input placeholder={'Страна'}
                           value={item.country}
                           onChange={handleChangeField}
                           field={'country'}/>
                    <Input placeholder={'Город'}
                           value={item.city}
                           onChange={handleChangeField}
                           field={'city'}/>
                </Modal>
            )}
            {addNewItemStep === 'success' && (
                <Model isOpen={newItemModal}
                       onClose={handleCloseNewItemModal}
                       title={'Успех'}
                       onConfirm={handleCreateItem}
                       confirmBtn={'Ура'}>

                    <h1>Ваш товар успешно добавлен!</h1>
                </Model>)}
        </>
    );
};

AddItemContainer.propTypes = {};

export default AddItemContainer;