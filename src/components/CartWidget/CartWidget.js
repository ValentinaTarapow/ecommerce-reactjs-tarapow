import { Fragment, useContext } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { CartContext } from "../../context/CartContext";
import './CartWidget.scss'; 

const CartWidget = () =>{

    const {totalAmount} = useContext(CartContext);
    return(
        <Fragment>
            <btn className="btn-shopping-cart">
                <HiShoppingCart size="24" className="ms-2"/>
                <span className className="mx-2">{totalAmount()}</span>
            </btn>
        </Fragment>
    );
}

export default CartWidget;