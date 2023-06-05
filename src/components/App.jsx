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
    isLoading: false,
    error: null,
    showModal: false,
    largeImage: '',
    search: '',
  }

  async componentDidUpdate(_, prevState) {

    console.log('до if => prevState.search =>', prevState.search);
    console.log('до if => this.state.search =>', this.state.search);

    if (prevState.search !== this.state.search) {
      console.log('в if => state.search', this.state.search);
      this.setState({ isLoading: true });

      try {            
        const response = await axios.get(`https://pixabay.com/api/?q=${this.state.search}&page=1&key=25738423-b3273d9a56f64cc8a00238b49&image_type=photo&orientation=horizontal&per_page=12`);
      // const response = await axios.get('https://pixabay.com/api/?q=cat&page=1&key=25738423-b3273d9a56f64cc8a00238b49&image_type=photo&orientation=horizontal&per_page=12');
        this.setState({ images: response.data.hits });
      } catch(error) {
        console.error('error.message =>', error.message);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }



  

  // async componentDidMount() {

  //   this.setState({ isLoading: true });

  //   try {
  //     const response = await axios.get('https://pixabay.com/api/?q=cat&page=1&key=25738423-b3273d9a56f64cc8a00238b49&image_type=photo&orientation=horizontal&per_page=12');
  //     this.setState({images: response.data.hits})
  //     // const { id, webformatURL, largeImageURL } = response.data.hits;
  //     //  console.log({ id, webformatURL, largeImageURL })
  //     // console.log(response.data.hits);
  //   } catch(error) {
  //     console.error('error.message =>', error.message);
  //   } finally {
  //     this.setState({ isLoading: false });
  //   }
  // }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  }

  onImageClick = url => {
    // console.log('url', url);
    this.setState({ largeImage: url });
    this.toggleModal();
  }

  handleOnSearchbarSubmit = search => {  
    this.setState({ search });
  }


  render() {    
    const { images, isLoading, showModal, largeImage } = this.state; 
    return (
      <div className={css.App} >
        <Searchbar onSubmit={this.handleOnSearchbarSubmit} />
        
        {isLoading
          ? <Loader />
          : <ImageGallery>
            <ImageGalleryItem arrayOfImages={images} onClick={this.onImageClick} />
          </ImageGallery>
        }
        <Button />

        {/* <button type="button" onClick={this.toggleModal}>Open</button>         */}
        {showModal && <Modal onClose={this.toggleModal} largeImage={largeImage} />}
      </div>
    )
  }
}

export default App;

        // /* <Loader /> 

        // <Searchbar />    
        
        // <ImageGallery>
        //   <ImageGalleryItem arrayOfImages={images} onClick={this.onImageClick} />
        // </ImageGallery> */