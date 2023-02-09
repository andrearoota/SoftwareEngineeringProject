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
      wallet: 0,
      current_value: 0,
      invested_money: 0,
      tot_money: 0,
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.wallet !== prevProps.wallet || this.state.tot_money === 0)
      this.setState({
        wallet: this.props.wallet,
        current_value: calculate_curr(this.props.prop),
        invested_money: calculate_invested(this.props.prop),
        tot_money: calculate_invested(this.props.prop) + this.props.wallet,
      });
  }

  render() {
    return (
      <div className={classes.featured}>
        <div className={classes.top}>
          <h1 className={classes.title}>Money Allocation</h1>
        </div>
        <div className={classes.bottom}>
          <div style={{ width: 200, height: 200 }}>
            <CircularProgressbar value={this.state.invested_money / (this.state.current_value + this.state.wallet) * 100} />
          </div>

          <p className={classes.title}>Total money </p>
          <p className={classes.amount}>{(this.state.current_value + this.state.wallet).toFixed(2)}€</p>
          <p className={classes.desc}>
            This is the total amount of money you loaded into the app. Check how much you invsted.
          </p>
          <div className={classes.summary}>
            <div className={classes.item}>
              <div className={classes.itemTitle}>Total Amount</div>
              <div className={classes.resultAmount}>{(this.state.invested_money + this.state.wallet).toFixed(2)}€</div>
            </div>
            <div className={classes.item}>
              <div className={classes.itemTitle}>Invested</div>
              <div className={classes.resultAmount}>{this.state.invested_money.toFixed(2)}€</div>
            </div>
            <div className={classes.item}>
              <div className={classes.itemTitle}>Curr value</div>
              <div className={classes.resultAmount}>{this.state.current_value.toFixed(2)}€</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Card;