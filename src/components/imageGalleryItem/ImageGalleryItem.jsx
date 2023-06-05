import React, { Component } from "react";
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component{

    render() {        
        const { arrayOfImages, onClick } = this.props; 
        // console.log('masyv', arrayOfImages);
        return (
            <>
                {arrayOfImages.map(({ id, webformatURL, largeImageURL, tags }) => {
                    return <li key={id} className={css.ImageGalleryItem}>
                        <img src={webformatURL} alt={tags}
                            className={css.ImageGalleryItemImage} onClick={() => onClick(largeImageURL, tags)} />
                    </li>
                })}
            </>
        );
    }
}

export default ImageGalleryItem;