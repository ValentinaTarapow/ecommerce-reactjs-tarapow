import { Fragment } from "react";
import { HiShoppingCart } from "react-icons/hi";
import './CartWidget.scss'; 

const CartWidget = () =>{

    return(
        <Fragment>
            <btn className="btn-shopping-cart">
                <HiShoppingCart size="24"/>
            </btn>
        </Fragment>
    );
}

export default CartWidget;