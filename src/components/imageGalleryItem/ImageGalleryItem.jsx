import React, { Component } from "react";
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component{

    render() {        
        const { arrayOfImages, onClick } = this.props;
        // console.log('arrayOfImages, proprs =>', arrayOfImages);
        return (
            <>
                {arrayOfImages.map(({ id, webformatURL, largeImageURL }) => {
                    return <li key={id} className={css.ImageGalleryItem}>
                        <img src={webformatURL} alt="small pictures preview" className={css.ImageGalleryItemImage} onClick={() => onClick(largeImageURL)} />
                            </li>
                })}
            </>
        );
    }
}

export default ImageGalleryItem;
/**
 *             // <li className={css.ImageGalleryItem}>
            //     <img src="" alt="" className={css.ImageGalleryItemImage} />
            // </li>
 * 
 * {arrayOfImages.map(({id, webformatURL})=>{
 *  return <li key={id} className={css.ImageGalleryItem}>
                <img src={webformatURL} alt="image" className={css.ImageGalleryItemImage} />
            </li>
 * })}
 * 
 * 
 *  * id - унікальний ідентифікатор
 * webformatURL - посилання на маленьке зображення для списку карток
 * largeImageURL - посилання на велике зображення для модального вікна
 */

