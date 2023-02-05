import classes from "./Card.module.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React from "react";

// CARD COMPONENT
// input: stocks of logged user, wallet (available funds) of logged user
// calculates the invested money and the current value of the wallet


//functin to calculate the current value of the wallet of the user
export function calculate_curr(stock){
  let sum=0;
  for (let s in stock)
  {
    sum+= s.current_value*s.number_stocks;
  }
  return sum;
}


//functin to calculate the invested money
export function calculate_invested(stock){
  let sum=0;
  for (let s in stock)
  {
    sum+= s.purchase_cost*s.number_stocks;
  }
  return sum;


}


class Card extends React.Component {
  constructor(props) {
    super(props);
    let current_value= calculate_curr(props.prop);
    let invested_money= calculate_invested(props.prop);
    let tot_money= invested_money+wallet; 
  }
  render() {
    return (
      <div className={classes.featured}>
        <div className={classes.top}>
          <h1 className={classes.title}>Money Allocation</h1>
        </div>
        <div className={classes.bottom}>
          <div style={{ width: 200, height: 200 }}>
          <CircularProgressbar value={this.invested_money/this.tot_money} />
          </div>
          
          <p className={classes.title}>Total money </p>
          <p className={classes.amount}>{this.tot_money}€</p>
          <p className={classes.desc}>
            This is the total amount of money you loaded into the app. Check how much you invsted.
          </p>
          <div className={classes.summary}>
            <div className={classes.item}>
              <div className={classes.itemTitle}>Total Amount</div>
              <div className={classes.resultAmount}>{this.tot_money}€</div>
            </div>
            <div className={classes.item}>
              <div className={classes.itemTitle}>Invested</div>
              <div className={classes.resultAmount}>{this.invested_money}€</div>
            </div>
            <div className={classes.item}>
              <div className={classes.itemTitle}>Curr value</div>
              <div className={classes.resultAmount}>{this.current_value}€</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Card;