import React from 'react'
import './Widget.css'
import { AiOutlineStock } from "react-icons/ai";

const icon= (<AiOutlineStock className="icon" style={{
  color: "black",
  backgroundColor: "rgba(125, 125, 125, 0.2)",
}}/>)


const Widget = ({prop}) => {
  return (
    <div className="widget">
        <div className="left">
            <span className="title">
                {prop.title}
            </span>
            <span className="counter">
            {prop.amount} €
            </span>
        </div>
        <div className="right">
            <div className="percentage positive">
                {prop.percentage} %
            </div>
            
            {icon}

          
            
        </div>
    </div>
  )
}

export default Widget