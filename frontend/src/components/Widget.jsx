import React from 'react'
import classes from './Widget.module.css'
import { AiOutlineStock } from "react-icons/ai";

const icon= (<AiOutlineStock className={classes.icon} style={{
  color: "black",
  backgroundColor: "rgba(125, 125, 125, 0.2)",
}}/>)

class Widget extends React.Component {
  render() {
    return (
      <div className={classes.widget}>
          <div className={classes.left}>
              <span className={classes.title}>
                  {this.props.item.title}
              </span>
              <span className={classes.counter}>
              {this.props.item.amount} €
              </span>
          </div>
          <div className={classes.right}>
              <div className={classes.pospercentage}>
                  {this.props.item.percentage} %
              </div>
              {icon}
          </div>
      </div>
    );
  }
}

export default Widget;