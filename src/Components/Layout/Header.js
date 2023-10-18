import React,{Fragment} from "react";
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import CartButton from "./HeaderCartButton";

const Header=(props)=>{
    return(
        <Fragment>
            <header className={classes.header}>
                <h2>React food order project!</h2>
            <CartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="melas on table"/>
            </div>

        </Fragment>
    );  
};

export default Header;