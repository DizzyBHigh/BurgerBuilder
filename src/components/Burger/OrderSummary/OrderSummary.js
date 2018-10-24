import React from 'react';
import Button from '../../ui/Button/Button';

const orderSummary = (props) => {
    const summary = Object.keys(props.ingredients)
    .map(igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>
                    {igKey}
                </span>
                : {props.ingredients[igKey]}
            </li>
        );
    })
    return(
        <React.Fragment>
            <h3>Your Order</h3>
            <p>Your Burger has the following: </p>
            <ul>
                {summary}
            </ul>
            <p><strong>Price: £{props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button 
                btnType="Danger" 
                clicked={props.cancelOrder}>CANCEL</Button>
            <Button 
                btnType="Success" 
                clicked={props.continueOrder}>CONTINUE</Button>
        </React.Fragment>
    );
};

export default orderSummary;