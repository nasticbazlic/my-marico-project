
import './button.css';

const Button = ({ children, variation }) => {

    return (
        <button className={variation}>
            {children}
        </button>
    )
}

export default Button;