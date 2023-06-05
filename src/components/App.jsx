import React, { Component } from "react";
import axios from 'axios';
import css from './App.module.css';

import Searchbar from "./searchbar/Searchbar";
import ImageGallery from "./imageGallery/ImageGallery";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";
import Button from "./button/Button";
import Loader from "./loader/Loader";
import Modal from "./modal/Modal";


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
    showModal: false,
    largeImage: '',
  }

  async componentDidMount() {
    try {
      const response = await axios.get('https://pixabay.com/api/?q=cat&page=1&key=25738423-b3273d9a56f64cc8a00238b49&image_type=photo&orientation=horizontal&per_page=12');
      this.setState({images: response.data.hits})
      // const { id, webformatURL, largeImageURL } = response.data.hits;
      //  console.log({ id, webformatURL, largeImageURL })
      // console.log(response.data.hits);
    } catch(error) {
      console.error('error.message =>', error.message);
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  }

  onImageClick = url => {
    console.log('url', url);
    this.setState({ largeImage: url });
    this.toggleModal();
  }


  render() {    
    const { images, showModal, largeImage } = this.state;    
    console.log(this.state.largeImage);

    return (
      <div className={css.App} >
        <Loader /> 

        {/* <button type="button" onClick={this.toggleModal}>Open</button>         */}
        {showModal && <Modal onClose={this.toggleModal} largeImage={largeImage} />}

        <Searchbar />        
        <ImageGallery>
          <ImageGalleryItem arrayOfImages={images} onClick={this.onImageClick} />
        </ImageGallery>
        <Button /> 
       
      </div>
    )
  }
}

export default App;