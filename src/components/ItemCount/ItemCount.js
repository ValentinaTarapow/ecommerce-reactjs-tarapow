import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import React from "react";
import { Button } from 'react-bootstrap';
import './ItemCount.scss'; 

const ItemCount = ({max, counter, setCounter, handleAdd }) =>{

// Handlers
    const handlePlus = () => {
        if(counter===max){
            return
        } else if (counter < max){
            setCounter( counter + 1 );
        }
        
    }

    const handleMinus = () => {
        if(counter===0){
            return
        }else if (counter > 0){
            setCounter( counter - 1 );
        }
        
    }
//__________________________________________________


//Checks for enabling minus, plus and add buttons
    const checkZero = ()=>{
        return (counter===0);
    }

    const checkStock = () =>{
        return (counter>=max);
    }

    const checkAdd = () =>{
        return ((counter===0 || counter >max));
    }
//__________________________________________________

    return(
        <div className="itemCount-container">
            <div className="itemCount">
                <div className="operations">
                    <Button variant="outline-secondary" disabled={checkZero()} className="btn-minus" onClick={handleMinus} ><AiOutlineMinus/></Button>
                    <span onChange={checkZero,checkStock, checkAdd}>{`${counter}`}</span>
                    <Button variant="outline-secondary" disabled={checkStock()} className="btn-plus" onClick={handlePlus}><AiOutlinePlus/></Button>
                </div>
                
                <div>
                    <Button disabled={checkAdd()} className="w-100 btn-add-chart" onClick={handleAdd}><HiShoppingCart/> Add to chart</Button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;
