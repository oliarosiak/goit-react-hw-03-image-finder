import React, { Component } from "react";
import css from './App.module.css';

import Searchbar from "./searchbar/Searchbar";
import ImageGallery from "./imageGallery/ImageGallery";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";
import Button from "./button/Button";
import Loader from "./loader/Loader";
import Modal from "./modal/Modal";

class App extends Component{

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

