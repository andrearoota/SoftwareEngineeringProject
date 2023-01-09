import React from 'react'
import './Widget.css'
import { AiOutlineStock } from "react-icons/ai";

// WIDGET COMPONENT
// input: stocks of logged user
// calculates the difference of purchase cost to current value of the last 4 stocks 

const icon= (<AiOutlineStock className="icon" style={{
  color: "black",
  backgroundColor: "rgba(125, 125, 125, 0.2)",
}}/>);


const Widget = ({prop}) => {
  return (
    <div className="widget">
        <div className="left">
            <span className="title">
                {prop.stock_name}
            </span>
            <span className="counter">
            {prop.current_value*prop.number_stocks} €
            </span>
        </div>
        <div className="right">
            <div className="percentage positive">
                {(prop.current_value-prop.purchase_cost)/prop.purchase_cost} %
            </div>
            
            {icon}

  
        </div>
    </div>
  )
}

export default Widget