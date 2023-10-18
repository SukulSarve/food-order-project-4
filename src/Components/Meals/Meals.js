import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailabelMeals";
import React ,{ Fragment } from "react";
const Meal=props=>{
    return(
        <Fragment>
            <MealsSummary/>
            <AvailableMeals/>
        </Fragment>
    )
};

export default Meal;