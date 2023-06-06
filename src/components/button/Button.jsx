import css from './Button.module.css';

const Button = ({ onButtonClick }) => (
    <button
        onClick={() => onButtonClick()}
        type="button"
        className={css.Button} >
        Load more
    </button>
);

export default Button;