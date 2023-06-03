import React, { Component } from "react";
import css from './App.module.css';

import Searchbar from "./searchbar/Searchbar";
import ImageGallery from "./imageGallery/ImageGallery";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";
import Button from "./button/Button";

class App extends Component{

  render() {

    console.log('Проба 1');
    console.log('Проба 2');
    
    return (
      <div className={css.Container} >
        <Searchbar />        
        <ImageGallery>
          <ImageGalleryItem />
        </ImageGallery>
        <Button />

        


      </div>
    )
  }
}

export default App;

