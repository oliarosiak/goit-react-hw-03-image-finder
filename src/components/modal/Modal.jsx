import React, { Component } from "react";
import { createPortal } from "react-dom";
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component{

    componentDidMount() {
        // console.log('Mount');        
        window.addEventListener('keydown', this.handleEscKey);
    }

    componentWillUnmount() {
        // console.log('Unmount')
        window.removeEventListener('keydown', this.handleEscKey);
    }

    handleEscKey = event => {
        // console.log('event.code', event.code);
        if (event.code === 'Escape') {            
            this.props.onClose();
        }
    }

    handleOverlayClick = event => {
        // console.log('event.currentTarget', event.currentTarget);
        // console.log('event.target', event.target);
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    }

    render() {        
        const { largeImage } = this.props;     

        return createPortal(
            <div onClick={this.handleOverlayClick} className={css.Overlay} >
                <div className={css.Modal} >
                    <img src={largeImage} alt="big" />
                </div>
            </div>, modalRoot,            
        )
    }
}

export default Modal;


/**
 * largeImage
 * Опис компонента <Modal>
 * Під час кліку на елемент галереї повинно відкриватися модальне вікно з темним оверлеєм і 
 * відображатися велика версія зображення. Модальне вікно повинно закриватися по натисканню 
 * клавіші ESC або по кліку на оверлеї.
 * 
 * Зовнішній вигляд схожий на функціонал цього VanillaJS-плагіна, 
 * тільки замість білого модального вікна рендериться зображення 
 * (у прикладі натисніть Run). Анімацію робити не потрібно!
 * 
 * <div class="overlay">
 *   <div class="modal">
 *     <img src="" alt="" />
 *   </div>
 * </div>
 */