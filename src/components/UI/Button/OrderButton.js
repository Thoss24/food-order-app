import classes from './OrderButton.module.css';

const OrderButton = (props) => {
    return (
        <div className={classes['button-container']}>
            <button className={classes['order-button']} onClick={props.sendOrder}>Order</button>
        </div>
    )
}

export default OrderButton