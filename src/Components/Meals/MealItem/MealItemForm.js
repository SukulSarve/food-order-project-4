import Input from "../../UI/Input";
import React, { useRef, useState } from "react";

import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const eneteredAmountInNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      eneteredAmountInNumber < 1 ||
      eneteredAmountInNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(eneteredAmountInNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
          step: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>please enter a valid amount</p>}
    </form>
  );
};

export default MealItemForm;
