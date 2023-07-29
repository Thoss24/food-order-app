import useInput from "../hooks/use_input";
import classes from './CheckoutForm.module.css'
import OrderButton from "../UI/Button/OrderButton";

const checkError = (val) => val.trim() !== ""

const CheckoutForm = (props) => {

    const {
        inputHandler: nameInputHandler,
        isTouchedHandler: nameIsTouchedHandler,
        reset: nameResetHandler,
        inputValue: nameInputValue,
        inputIsValid: nameInputIsValid,
        inputIsInvalid: nameInputIsInvalid
    } = useInput(checkError);

    const {
        inputHandler: streetInputHandler,
        isTouchedHandler: streetIsTouchedHandler,
        reset: streetResetHandler,
        inputValue: streetInputValue,
        inputIsValid: streetInputIsValid,
        inputIsInvalid: streetInputIsInvalid
    } = useInput(checkError);

    const {
        inputHandler: postalCodeInputHandler,
        isTouchedHandler: postalCodeIsTouchedHandler,
        reset: postalCodeResetHandler,
        inputValue: postalCodeInputValue,
        inputIsValid: postalCodeInputIsValid,
        inputIsInvalid: postalCodeInputIsInvalid
    } = useInput(checkError);

    const {
        inputHandler: cityInputHandler,
        isTouchedHandler: cityIsTouchedHandler,
        reset: cityResetHandler,
        inputValue: cityInputValue,
        inputIsValid: cityInputIsValid,
        inputIsInvalid: cityInputIsInvalid
    } = useInput(checkError);

      const {
        inputHandler: emailInputHandler,
        isTouchedHandler: emailIsTouchedHandler,
        reset: emailResetHandler,
        inputValue: emailInputValue,
        inputIsValid: emailInputIsValid,
        inputIsInvalid: emailInputIsInvalid
    } = useInput(checkError);

    let formIsValid = false

    if (nameInputIsValid && cityInputIsValid && streetInputIsValid && emailInputIsValid && postalCodeInputIsValid) {
        formIsValid = true
    }

    const formSubmitHandler = (event) => {
        event.preventDefault()

        nameResetHandler()
        cityResetHandler()
        streetResetHandler()
        emailResetHandler()
        postalCodeResetHandler()
    };

    return (
        <form action="" onSubmit={formSubmitHandler} className={classes['checkout-form']}>
            <div className={`${classes['form-control']} ${nameInputIsInvalid ? classes.invalid : ''}`}>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' onChange={nameInputHandler} onBlur={nameIsTouchedHandler} value={nameInputValue}/>
                {nameInputIsInvalid && <p className={classes['error-text']}>Name input field cannot be empty</p>}
            </div>
            <div className={`${classes['form-control']} ${streetInputIsInvalid ? classes.invalid : ''}`}>
                <label htmlFor="street">Street Address</label>
                <input type="text" id='street' onChange={streetInputHandler} onBlur={streetIsTouchedHandler} value={streetInputValue}/>
                {streetInputIsInvalid && <p className={classes['error-text']}>Street input field cannot be empty</p>}
            </div>
            <div className={`${classes['form-control']} ${postalCodeInputIsInvalid ? classes.invalid : ''}`}>
                <label htmlFor="postal-code">Post Code</label>
                <input type="text" id='postal-code' onChange={postalCodeInputHandler} onBlur={postalCodeIsTouchedHandler} value={postalCodeInputValue}/>
                {postalCodeInputIsInvalid && <p className={classes['error-text']}>Postal Code input field cannot be empty</p>}
            </div>
            <div className={`${classes['form-control']} ${cityInputIsInvalid ? classes.invalid : ''}`}>
                <label htmlFor="city" for>City</label>
                <input type="text" id='city' onChange={cityInputHandler} onBlur={cityIsTouchedHandler} value={cityInputValue}/>
                {cityInputIsInvalid && <p className={classes['error-text']}>City input field cannot be empty</p>}
            </div>
            <div className={`${classes['form-control']} ${emailInputIsInvalid ? classes.invalid : ''}`}>
                <label htmlFor="email">Email</label>
                <input type="text" id='email' onChange={emailInputHandler} onBlur={emailIsTouchedHandler} value={emailInputValue}/>
                {emailInputIsInvalid && <p className={classes['error-text']}>Email input field cannot be empty</p>}
            </div>
            <OrderButton formValid={!formIsValid} sendOrder={props.sendOrder}/>
        </form>
    )
};

export default CheckoutForm;