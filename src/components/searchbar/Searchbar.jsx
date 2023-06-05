import React, { Component } from "react";
import css from './Searchbar.module.css';

class Searchbar extends Component{
    state = {
        search: '',
    }

    handleInputChange = event => {
        this.setState({search: event.currentTarget.value})
    }

    handleFormSubmite = event => {
        event.preventDefault(); 
        this.props.onSubmit(this.state.search);
        this.setState({ search: '' });
    }    

    render() {      
        return (
            <header className={css.Searchbar}>
                <form onSubmit={this.handleFormSubmite} className={css.SearchForm}>
                    <button type="submit" className={css.SearchFormButton}>
                        <span className={css.SearchFormButtonLabel}>Search</span>
                    </button>

                    <input
                        name="search"
                        value={this.state.search}
                        onChange={this.handleInputChange}
                        className={css.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
};

export default Searchbar;       