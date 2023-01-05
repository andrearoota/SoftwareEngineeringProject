import React from 'react'
import './Widget.css'

const Widget = ({prop}) => {
  return (
    <div className="widget">
        <div className="left">
            <span className="title">
                {prop.title}
            </span>
            <span className="counter">
            {prop.amount}
            </span>
        </div>
        <div className="right">
            <div className="percentage positive">
                {prop.percentage} %
            </div>
        </div>
    </div>
  )
}

export default Widget