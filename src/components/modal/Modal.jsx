import React, { Component } from "react";
import css from './Modal.module.css';

class Modal extends Component{

    render() {
        
        return (
            <div className={css.Overlay} >
                <div className={css.Modal} >
                    <img src="" alt="" />
                </div>
            </div>            
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