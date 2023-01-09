import "./Card.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { GiStockpiles } from "react-icons/gi";


// CARD COMPONENT
// input: stocks of logged user, wallet (available funds) of logged user
// calculates the invested money and the current value of the wallet
const data= {
    invested: 500,
    tot: 700,
    curr: 515,

}


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

const Card = ({prop, wallet}) => {

  let current_value= calculate_curr(prop);
  let invested_money= calculate_invested(prop);
  let tot_money= invested_money+wallet;

  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Money Allocation</h1>
      </div>
      <div className="bottom">
      <div style={{ width: 200, height: 200 }}>
  <CircularProgressbar value={invested_money/tot_money} />
</div>
        
        <p className="title">Total money </p>
        <p className="amount">{tot_money}€</p>
        <p className="desc">
          This is the total amount of money you loaded into the app. Check how much you invsted.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Total Amount</div>
              <div className="resultAmount">{tot_money}€</div>
          </div>
          <div className="item">
            <div className="itemTitle">Invested</div>
              <div className="resultAmount">{invested_money}€</div>
          </div>
          <div className="item">
            <div className="itemTitle">Curr value</div>
              <div className="resultAmount">{current_value}€</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;