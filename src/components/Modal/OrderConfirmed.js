import classes from './OrderConfirmed.module.css'

const OrderConfirmed = (props) => {
    return (
        <div className={classes['order-confirmed-container']}>
            <div className={classes.backdrop} onClick={props.orderNotDisplaying}/>
            <div className={classes['order-confirmed']}>
                <h2>Order Confirmed! Your food will be with you shortly!</h2>
            </div>
        </div>
    )
};

export default OrderConfirmed;