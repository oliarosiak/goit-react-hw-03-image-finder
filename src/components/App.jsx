import React, { Component } from "react";
import css from './App.module.css';

import { fetchPixabeyRequest } from './api/pixabayApi.js';
import Searchbar from "./searchbar/Searchbar";
import ImageGallery from "./imageGallery/ImageGallery";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";
import Button from "./button/Button";
import Loader from "./loader/Loader";
import Modal from "./modal/Modal";

class App extends Component{
  state = {
    images: [],
    isLoading: false,
    error: null,
    showModal: false,
    largeImage: '',
    alt: '',
    search: '',
    page: null,
    totalHits: null,
  }

  async componentDidUpdate(_, prevState) {

    if (this.state.page !== prevState.page || prevState.search !== this.state.search) {      
      this.setState({ isLoading: true });

      fetchPixabeyRequest(this.state.search, this.state.page)
        .then(pictures => this.setState({images: pictures.hits, totalHits: pictures.totalHits}))
        .catch(error => console.log(error))
        .finally(this.setState({ isLoading: false }));
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  }

  onImageClick = (url, alt) => {
    this.setState({ largeImage: url, alt });
    this.toggleModal();
  }

  handleOnSearchbarSubmit = search => {  
    this.setState({ search, page: 1 });
  }

  loadMoreHandler = (page) => {
    this.setState({ page });
  }

  render() {    
    const { images, isLoading, showModal, largeImage, alt, totalHits, page } = this.state; 

    console.log('alt', this.state.alt);
    const perPage = totalHits > 12 && page < Math.ceil(totalHits / 12);

    return (
      <div className={css.App} >
        <Searchbar onSubmit={this.handleOnSearchbarSubmit} />
        
        {isLoading 
          ? <Loader />
          : <ImageGallery>
            <ImageGalleryItem arrayOfImages={images} onClick={this.onImageClick} />
          </ImageGallery>
        }

        {perPage && <Button onClick={ this.loadMoreHandler } />}
        

        {showModal && <Modal onClose={this.toggleModal} largeImage={largeImage} alt={alt} />}
      </div>
    )
  }
}

export default App;