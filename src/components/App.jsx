import React, { Component } from "react";
import css from './App.module.css';

import Searchbar from "./searchbar/Searchbar";
import ImageGallery from "./imageGallery/ImageGallery";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";

class App extends Component{

  render() {
    
    return (
      <div className={css.Container} >
        <Searchbar />        
        <ImageGallery>
          <ImageGalleryItem />
        </ImageGallery>

        


      </div>
    )
  }
}

export default App;