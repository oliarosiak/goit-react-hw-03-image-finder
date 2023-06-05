import React, { Component } from "react";
import css from './Button.module.css';

class Button extends Component{
    state = {
        page: 2,
    }

    handleLoadMoreBtn = () => {      
        this.setState(prevState => {
            return { page: prevState.page + 1 }
        });
        this.props.onClick(this.state.page);
    }

    render() { 
        return (
            <button
                onClick={this.handleLoadMoreBtn}
                type="button"
                className={css.Button} >
                Load more
            </button>
        )
    }
}

export default Button;