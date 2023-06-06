import { Vortex } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => (
    <div className={css.Loader}>
        <Vortex
            visible={true}
            height="200"
            width="200"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={['#003f5c', '#444e86', '#955196', '#dd5182', '#ff6e54', '#ffa600']}
        />
    </div>
)

export default Loader;