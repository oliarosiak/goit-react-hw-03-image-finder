import React, { Component } from "react";
import css from './Button.module.css';

class Button extends Component{

    render() {
        
        return (
            <button type="button" className={css.Button} >
                Load more
            </button>
        )
    }
}

export default Button;

/**
 * Опис компонента <Button>
 * При натисканні на кнопку Load more повинна довантажуватись наступна 
 * порція зображень і рендеритися разом із попередніми. 
 * Кнопка повинна рендеритися лише тоді, коли є якісь завантажені зображення. 
 * Якщо масив зображень порожній, кнопка не рендериться.
 */