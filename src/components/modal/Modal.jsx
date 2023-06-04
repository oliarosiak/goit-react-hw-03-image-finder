import React, { Component } from "react";
import { createPortal } from "react-dom";
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component{

    render() {

        const { children } = this.props;
        
        return createPortal(
            <div className={css.Overlay} >
                <div className={css.Modal} >
                    {children}
                    <img src="" alt="" />
                </div>
            </div>, modalRoot,            
        )
    }
}

export default Modal;


/**
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