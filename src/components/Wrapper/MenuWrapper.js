import classes from './MenuWrapper.module.css';

const MenuWrapper = (props) => {
    return (
        <ul className={classes['menu-wrapper']}>{props.children}</ul>
    )
};

export default MenuWrapper