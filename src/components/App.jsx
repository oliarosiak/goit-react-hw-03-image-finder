import React, { Component } from "react";
import css from './App.module.css';

import Searchbar from "./searchbar/Searchbar";
import ImageGallery from "./imageGallery/ImageGallery";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";
import Button from "./button/Button";
import Loader from "./loader/Loader";
// import Modal from "./modal/Modal";




/**
 * key (required)	str	Your API key: 25738423-b3273d9a56f64cc8a00238b49
 * url - https://pixabay.com/api/
 * 
 * example:
 * https://pixabay.com/api/?key=25738423-b3273d9a56f64cc8a00238b49&q=yellow+flowers&image_type=photo
 * 
 * 
 * https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
 * 
 * 
 * id - унікальний ідентифікатор
 * webformatURL - посилання на маленьке зображення для списку карток
 * largeImageURL - посилання на велике зображення для модального вікна
 */






class App extends Component{
  state = {
    images: [],
    error: null,
  }




  render() {
    
    return (
      <div className={css.App} >
        <Loader />       

        <Searchbar />        
        <ImageGallery>
          <ImageGalleryItem />
        </ImageGallery>
        <Button />  

        {/* <Modal /> */}
      </div>
    )
  }
}

export default App;

