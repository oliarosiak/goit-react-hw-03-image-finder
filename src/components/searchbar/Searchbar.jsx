import React, { Component } from "react";
import css from './Searchbar.module.css';

class Searchbar extends Component{
    state = {
        userSearch: '',
        search: '',
    }

    handleInputChange = event => {
        this.setState({
            userSearch: event.currentTarget.value,
            search: event.currentTarget.value.toLowerCase()
        });
    }

    handleFormSubmite = event => {
        event.preventDefault();         

        if (this.state.search.trim() === '') {
            alert('Please enter a search query');
            return;
        }

        this.props.onSubmit(this.state.search);
        this.setState({
            userSearch: '',
            search: '',
        });
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
                        value={this.state.userSearch}
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