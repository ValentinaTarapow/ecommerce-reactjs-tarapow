import { Fragment, useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { Button } from 'react-bootstrap';
import './ItemCount.scss'; 

const ItemCount = ({stock}) =>{

    const [counter, setCounter] = useState(1);

    const plusClick = () => {
        if(counter===stock){
            return
        } else if (counter < stock){
            setCounter( counter + 1 );
        }
        
    }

    const minusClick = () => {
        if(counter===0){
            return
        }else if (counter > 0){
            setCounter( counter - 1 );
        }
        
    }

    const checkZero = ()=>{
        return (counter===0);
    }

    const checkStock = () =>{
        return (counter>=stock);
    }

    const checkAddChart = () =>{
        return ((counter===0 || counter >stock));
    }
    
    const onAdd = () => {
        return(
            alert(`You added ${counter} products to the shopping cart`)
        )
    }

    return(
        <div className="itemCount-container">
            <div className="itemCount">
                <div className="operations">
                    <Button variant="outline-secondary" disabled={checkZero()} className="btn-minus" onClick={minusClick} ><AiOutlineMinus/></Button>
                    <p onChange={checkZero,checkStock, checkAddChart}>{`${counter}`}</p>
                    <Button variant="outline-secondary" disabled={checkStock()} className="btn-plus" onClick={plusClick}><AiOutlinePlus/></Button>
                </div>
                
                <div>
                    <Button disabled={checkAddChart()} className="w-100 btn-add-chart" onClick={onAdd}><HiShoppingCart/> Add to chart</Button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;
