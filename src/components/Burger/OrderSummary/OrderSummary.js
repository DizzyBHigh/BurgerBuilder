import React, {Component} from 'react';
import Button from '../../ui/Button/Button';

class OrderSummary extends Component { 
    // This could be a functional component as the WillUpdate method is handled by the parent component (Modal)
    // so we dont need the extra functionality (willUpdate)
    render () {
        const summary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>
                            {igKey}
                        </span>
                        : {this.props.ingredients[igKey]}
                    </li>
                );
            })

        return (
            <React.Fragment>
                <h3>Your Order</h3>
                <p>Your Burger has the following: </p>
                <ul>
                    {summary}
                </ul>
                <p><strong>Price: £{this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button
                    btnType="Danger"
                    clicked={this.props.cancelOrder}>CANCEL</Button>
                <Button
                    btnType="Success"
                    clicked={this.props.continueOrder}>CONTINUE</Button>
            </React.Fragment>
        );
    }

}

export default OrderSummary;