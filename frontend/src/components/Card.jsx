import classes from "./Card.module.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React from "react";

// CARD COMPONENT
// input: stocks of logged user, wallet (available funds) of logged user
// calculates the invested money and the current value of the wallet


//functin to calculate the current value of the wallet of the user
export function calculate_curr(stocks) {
  return stocks.reduce(
    (accumulator, stock) => accumulator + (stock.current_value * stock.number_stocks),
    0 // valore iniziale
  );
}


//functin to calculate the invested money
export function calculate_invested(stocks) {
  return stocks.reduce(
    (accumulator, stock) => accumulator + (stock.purchase_cost * stock.number_stocks),
    0 // valore iniziale
  );
}


class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_value: calculate_curr(props.prop),
      invested_money: calculate_invested(props.prop),
      tot_money: calculate_invested(props.prop) + props.wallet,
    }
  }
  render() {
    return (
      <div className={classes.featured}>
        <div className={classes.top}>
          <h1 className={classes.title}>Money Allocation</h1>
        </div>
        <div className={classes.bottom}>
          <div style={{ width: 200, height: 200 }}>
            <CircularProgressbar value={calculate_invested(this.props.prop) / calculate_invested(this.props.prop) + this.props.wallet} />
          </div>

          <p className={classes.title}>Total money </p>
          <p className={classes.amount}>{calculate_invested(this.props.prop) + this.props.wallet}€</p>
          <p className={classes.desc}>
            This is the total amount of money you loaded into the app. Check how much you invsted.
          </p>
          <div className={classes.summary}>
            <div className={classes.item}>
              <div className={classes.itemTitle}>Total Amount</div>
              <div className={classes.resultAmount}>{calculate_invested(this.props.prop) + this.props.wallet}€</div>
            </div>
            <div className={classes.item}>
              <div className={classes.itemTitle}>Invested</div>
              <div className={classes.resultAmount}>{calculate_invested(this.props.prop)}€</div>
            </div>
            <div className={classes.item}>
              <div className={classes.itemTitle}>Curr value</div>
              <div className={classes.resultAmount}>{calculate_curr(this.props.prop)}€</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Card;