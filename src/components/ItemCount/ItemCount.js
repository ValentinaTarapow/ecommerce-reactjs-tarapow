import { Fragment, useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { Button } from 'react-bootstrap';
import './ItemCount.scss'; 

const ItemCount = ({stock, initial}) =>{

    const [number, setNumber] = useState(0);

    const plusClick = () => {
        if(number===stock){return};
        setNumber( number + 1 );
    }

    const minusClick = () => {
        if(number===0){return};
        setNumber( number - 1 );
    }

    const checkZero = ()=>{
        return (number===0);
    }

    const checkStock = () =>{
        return (number>=stock);
    }

    const checkAddChart = () =>{
        return ((number===0 || number >stock));
    }

    return(
        <div className="itemCount-container">
            <div className="itemCount">
                <div className="operations">
                    <Button variant="outline-secondary" disabled={checkZero()} className="btn-minus" onClick={minusClick} ><AiOutlineMinus/></Button>
                    <p onChange={checkZero,checkStock, checkAddChart}>{`${number}`}</p>
                    <Button variant="outline-secondary" disabled={checkStock()} className="btn-plus" onClick={plusClick}><AiOutlinePlus/></Button>
                </div>
                
                <div>
                    <Button disabled={checkAddChart()} className="w-100 btn-add-chart"><HiShoppingCart/> Add to chart</Button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;
