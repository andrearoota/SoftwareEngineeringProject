import "./Card.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const data= {
    invested: 500,
    tot: 700,
    curr: 515,

}

const Card = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Money Allocation</h1>
      </div>
      <div className="bottom">
      <div style={{ width: 200, height: 200 }}>
  <CircularProgressbar value={66} />
</div>
        
        <p className="title">Total money </p>
        <p className="amount">{data.tot}€</p>
        <p className="desc">
          This is the total amount of money you loaded into the app. Check how much you invsted.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Total Amount</div>
              <div className="resultAmount">{data.tot}€</div>
          </div>
          <div className="item">
            <div className="itemTitle">Invested</div>
              <div className="resultAmount">{data.invested}€</div>
          </div>
          <div className="item">
            <div className="itemTitle">Curr value</div>
              <div className="resultAmount">{data.curr}€</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;