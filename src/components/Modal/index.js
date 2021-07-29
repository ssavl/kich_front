import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

// Components
import Button from '../Button';

import { ReactComponent as IconClose } from '../../img/icon-close.svg';

import './styles.sass';

const Modal = ({ isOpen, children, title, confirmBtn, onConfirm = _ => _, onClose = _ => _ }) => {
    const styles = {
        overlay: {
            background: 'rgba(23,25,31,0.5)',
        },
        content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    return (
        <ReactModal
            style={styles}
            isOpen={isOpen}
            shouldCloseOnOverlayClick={true}
            onRequestClose={onClose}
            className='Modal'
        >
            <button className='Modal__close' onClick={onClose}>
                <IconClose />
            </button>
            {title && <div className='Modal__title'>{title}</div>}
            <div className='Modal__body'>{children}</div>
            {confirmBtn && (
                <Button className='Modal__confirm-btn' label={confirmBtn} onClick={onConfirm} />
            )}
        </ReactModal>
    );
};

Modal.propTypes = {};

export default Modal;