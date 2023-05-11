import classes from './Body.module.css';

const Body = (props) => {
    return (
        <div className={classes.card}>{props.children}</div>
    )
}

export default Body