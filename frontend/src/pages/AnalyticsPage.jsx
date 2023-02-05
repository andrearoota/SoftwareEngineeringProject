import React from "react";
import classes from "./AnalyticsPage.module.css";
import "../index.css";
import Widget from "../components/Widget";
import Chart from "../components/Chart";
import Pie_Chart from "../components/Pie_Chart";
import Card from "../components/Card";

// ANALYTICS PAGE
//PIECHART that show how the money is allocated (which stocks)
//CARD that shows how much money is invested, how much is still available, the current value
//CHART that shows the current value of the wallet vs the initial value
//WIDGETS that show just the trend of 4 of user stocks

//function that returns stocks of user currently logged
async function get_stocks(data) {

  var requestOptions = {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "Authorization": `${data.authorisation.type} ${data.authorisation.token}`,
    },
    redirect: 'follow'
  };

  const resp = await fetch(`http://localhost/api/users/${data.user.id}/stocks`, requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error))

  return resp.user.stocks;
}

class AnalyticsPage extends React.Component {
  constructor(props) {
    super(props);
    let api_resp = this.get_stocks(props.user);
    let wallet_data= api_resp.wallet;
    let stocks=api_resp.stocks;
    
  }

  

  render() {
    return (
      <div className={classes.menu}>
        <button onClick={this.props.apriMenu} className='menu'><i className='fas fa-bars' /></button>
        <h1> Analytics </h1>

        <div className={classes.home}>
          <div className={classes.homeContainer}>
            <div className={classes.charts}>
              <Pie_Chart prop={this.stocks} />
              <Card prop={this.stocks} wallet={this.wallet_data} />
            </div>
            <div className={classes.charts}>
              <Chart title="Investment growth" aspect={2 / 1} prop={this.stocks} wallet={this.wallet_data} />
            </div>
            <div className={classes.widgets}>
              {this.stocks.slice(0,4).map((item) => (
                <Widget item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>);
  }
}

export default AnalyticsPage; 