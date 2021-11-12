import { Fragment } from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemListContainer.scss'; 

const ItemListContainer = ({greeting}) => {

    return(
        <Fragment>
            <div className="greeting">
                <h2>
                    {greeting}
                </h2>
            </div>

            <ItemCount stock="5"/>
        </Fragment>
    );

}

export default ItemListContainer