import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/Cart-context";

const CartButton = (props) => {
  const [btnIsHilighted, setbtnIsHighlighted] = useState(false);
  const CartCtx = useContext(CartContext);

  const { items } = CartCtx;

  const numberOfItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnclasses = `${classes.button} ${btnIsHilighted ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setbtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setbtnIsHighlighted(false);
    }, 300);

    return()=>{
      clearTimeout(timer);
    }
  }, [items]);
  return (
    <button className={btnclasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart Items</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default CartButton;
