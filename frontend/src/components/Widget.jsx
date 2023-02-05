import React from 'react'
import classes from './Widget.module.css'
import { AiOutlineStock } from "react-icons/ai";

// WIDGET COMPONENT
// input: stocks of logged user
// calculates the difference of purchase cost to current value of the last 4 stocks 

const icon= (<AiOutlineStock className={classes.icon} style={{
  color: "black",
  backgroundColor: "rgba(125, 125, 125, 0.2)",
}}/>)

class Widget extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={classes.widget}>
          <div className={classes.left}>
              <span className={classes.title}>
                  {this.props.prop.stock_name}
              </span>
              <span className={classes.counter}>
              {this.props.prop.current_value*this.props.prop.number_stocks} €
              </span>
          </div>
          <div className={classes.right}>
              <div className={classes.pospercentage}>
                  {(this.props.prop.current_value-this.props.prop.purchase_cost)/this.props.prop.purchase_cost} %
              </div>
              {icon}
          </div>
      </div>
    );
  }
}

export default Widget;