import classes from './Button.module.css';
import { FaShoppingCart } from 'react-icons/fa'

const Button = () => {
    return (
        <button className={classes.button}><FaShoppingCart /> Your Cart</button>
    )
}

export default Button