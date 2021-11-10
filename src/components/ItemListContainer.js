import { Fragment } from "react";

const ItemListContainer = ({greeting}) => {

    return(
        <Fragment>
            <div className="greeting">
                <h2>
                    {greeting}
                </h2>
            </div>
        </Fragment>
    );

}

export default ItemListContainer